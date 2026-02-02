import React, {Component} from 'react';
import {FILTER_ALL} from '../../services/filter';
import {MODE_CREATE, MODE_NONE} from '../../services/mode';
import {objectWithOnly, wrapChildrenWith} from '../../util/common';
import {getAll, addToList, updateStatus, sortByPriority, saveToStorage, loadFromStorage} from '../../services/todo';

class StateProvider extends Component {
    constructor() {
        super();
        
        // Try to load from LocalStorage first, fallback to default
        const savedList = loadFromStorage();
        const initialList = savedList || getAll();
        
        this.state = {
            query: '',
            mode: MODE_CREATE,
            filter: FILTER_ALL,
            list: sortByPriority(initialList)
        }
    }

    componentDidUpdate(prevProps, prevState) {
        // Save to LocalStorage whenever list changes
        if (prevState.list !== this.state.list) {
            saveToStorage(this.state.list);
        }
    }

    render() {
        let children = wrapChildrenWith(this.props.children, {
            data: this.state,
            actions: objectWithOnly(this, ['addNew', 'changeFilter', 'changeStatus', 'changeMode', 'setSearchQuery'])
        });

        return <div>{children}</div>;
    }

    addNew(text, priority) {
        let updatedList = addToList(this.state.list, {text, completed: false, priority});

        this.setState({list: updatedList});
    }

    changeFilter(filter) {
        this.setState({filter});
    }

    changeStatus(itemId, completed) {
        let updatedList = updateStatus(this.state.list, itemId, completed);
        // Re-sort after status change (completed items should sink to bottom)
        updatedList = sortByPriority(updatedList);

        this.setState({list: updatedList});
    }

    changeMode(mode = MODE_NONE) {
        this.setState({mode});
    }

    setSearchQuery(text) {
        this.setState({query: text || ''});
    }
}

export default StateProvider;
