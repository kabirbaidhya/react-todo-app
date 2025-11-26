import React, {Component} from 'react';
import {FILTER_ALL} from '../../services/filter';
import {MODE_CREATE, MODE_NONE} from '../../services/mode';
import {objectWithOnly} from '../../util/common';
import {getAll, addToList, updateStatus} from '../../services/todo';

class StateProvider extends Component {
    constructor() {
        super();
        this.state = {
            query: '',
            mode: MODE_CREATE,
            filter: FILTER_ALL,
            list: getAll(),
            // Focus session state
            focusSession: {
                timer: 25 * 60, // Default 25 minutes in seconds
                isRunning: false,
                isPaused: false,
                currentTodoId: null,
                focusHistory: JSON.parse(localStorage.getItem('focusHistory')) || []
            }
        }
        this.timerInterval = null;
    }

    render() {
        // Pass state and actions directly to the child component
        const { children } = this.props;
        const childProps = {
            data: this.state,
            actions: objectWithOnly(this, ['addNew', 'changeFilter', 'changeStatus', 'changeMode', 'setSearchQuery', 'startFocusSession', 'pauseFocusSession', 'stopFocusSession', 'completeFocusSession', 'setFocusTimer'])
        };

        return React.cloneElement(children, childProps);
    }

    addNew(text) {
        let updatedList = addToList(this.state.list, {text, completed: false});

        this.setState({list: updatedList});
    }

    changeFilter(filter) {
        this.setState({filter});
    }

    changeStatus(itemId, completed) {
        const updatedList = updateStatus(this.state.list, itemId, completed);

        this.setState({list: updatedList});
    }

    changeMode(mode = MODE_NONE) {
        this.setState({mode});
    }

    setSearchQuery(text) {
        this.setState({query: text || ''});
    }

    // Focus session management methods
    startFocusSession(todoId) {
        if (this.timerInterval) clearInterval(this.timerInterval);
        
        const newState = {
            ...this.state,
            focusSession: {
                ...this.state.focusSession,
                isRunning: true,
                isPaused: false,
                currentTodoId: todoId
            }
        };
        
        this.setState(newState);
        
        this.timerInterval = setInterval(() => {
            this.setState(prevState => {
                if (prevState.focusSession.timer <= 0) {
                    clearInterval(this.timerInterval);
                    return {
                        ...prevState,
                        focusSession: {
                            ...prevState.focusSession,
                            isRunning: false,
                            timer: 25 * 60 // Reset to default
                        }
                    };
                }
                return {
                    ...prevState,
                    focusSession: {
                        ...prevState.focusSession,
                        timer: prevState.focusSession.timer - 1
                    }
                };
            });
        }, 1000);
    }

    pauseFocusSession() {
        if (this.timerInterval) clearInterval(this.timerInterval);
        
        this.setState(prevState => ({
            ...prevState,
            focusSession: {
                ...prevState.focusSession,
                isRunning: false,
                isPaused: true
            }
        }));
    }

    stopFocusSession() {
        if (this.timerInterval) clearInterval(this.timerInterval);
        
        this.setState(prevState => ({
            ...prevState,
            focusSession: {
                ...prevState.focusSession,
                isRunning: false,
                isPaused: false,
                timer: 25 * 60,
                currentTodoId: null
            }
        }));
    }

    completeFocusSession(markTodoAsComplete = false) {
        if (this.timerInterval) clearInterval(this.timerInterval);
        
        let updatedList = this.state.list;
        
        // Mark todo as complete if requested
        if (markTodoAsComplete && this.state.focusSession.currentTodoId) {
            updatedList = updateStatus(updatedList, this.state.focusSession.currentTodoId, true);
        }
        
        // Record the focus session
        const newFocusHistory = [...this.state.focusSession.focusHistory, {
            todoId: this.state.focusSession.currentTodoId,
            duration: 25 * 60 - this.state.focusSession.timer, // Duration in seconds
            completed: markTodoAsComplete,
            timestamp: new Date().toISOString()
        }];
        
        // Save to localStorage
        localStorage.setItem('focusHistory', JSON.stringify(newFocusHistory));
        
        this.setState(prevState => ({
            ...prevState,
            list: updatedList,
            focusSession: {
                ...prevState.focusSession,
                isRunning: false,
                isPaused: false,
                timer: 25 * 60,
                currentTodoId: null,
                focusHistory: newFocusHistory
            }
        }));
    }

    setFocusTimer(duration) {
        this.setState(prevState => ({
            ...prevState,
            focusSession: {
                ...prevState.focusSession,
                timer: duration * 60
            }
        }));
    }
}

export default StateProvider;
