import React, { Component } from 'react';
import { FILTER_ALL } from '../../services/filter';
import { MODE_CREATE, MODE_EDIT, MODE_NONE } from '../../services/mode';
import { objectWithOnly, wrapChildrenWith } from '../../util/common';
import { getAll, addToList, updateStatus } from '../../services/todo';

class StateProvider extends Component {
    constructor() {
        super();

        this.state = {
            query: '',
            mode: MODE_CREATE,
            filter: FILTER_ALL,
            list: getAll(),
            editingItem: null,
            editingText: ''
        };
    }

    render() {
        let children = wrapChildrenWith(this.props.children, {
            data: this.state,
            actions: objectWithOnly(this, [
                'addNew',
                'changeFilter',
                'changeStatus',
                'changeMode',
                'setSearchQuery',
                'startEdit',
                'updateItem',
                'setEditingText'
            ])
        });

        return <div>{children}</div>;
    }

    addNew(text) {
        const updatedList = addToList(this.state.list, {
            text,
            completed: false
        });

        this.setState({ list: updatedList });
    }

    // Start editing an existing todo
    startEdit(item) {
        this.setState({
            editingItem: item,
            editingText: item.text,
            mode: MODE_EDIT
        });
    }

    // Update an existing todo
    updateItem(itemId, text) {
        const updatedText = text.trim();

        if (!updatedText) {
            return;
        }

        const updatedList = this.state.list.map(item =>
            item.id === itemId
                ? { ...item, text: updatedText }
                : item
        );

        this.setState({
            list: updatedList,
            editingItem: null,
            editingText: '',
            mode: MODE_CREATE
        });
    }
    setEditingText(text) {
    this.setState({
        editingText: text
    });
}

    changeFilter(filter) {
        this.setState({ filter });
    }

    changeStatus(itemId, completed) {
        const updatedList = updateStatus(
            this.state.list,
            itemId,
            completed
        );

        this.setState({ list: updatedList });
    }

    changeMode(mode = MODE_NONE) {
        this.setState({
            mode,
            editingItem: null
        });
    }

    setSearchQuery(text) {
        this.setState({ query: text || '' });
    }
}

export default StateProvider;