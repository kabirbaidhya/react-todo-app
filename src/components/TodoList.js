import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import FilteredList from './FilteredList';
import {applyFilter} from './../services/filter';
import {FILTER_ALL} from './../services/filter';
import {getAll, addToList, updateStatus} from './../services/todo';

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            filter: FILTER_ALL,
            items: getAll()
        }
    }

    render() {
        const {items, filter} = this.state;
        const {addNew, changeFilter, changeStatus} = this;
        const count = items.length;
        const filteredItems = applyFilter(items, filter);

        return (
            <div className="todolist">
                <Header addNew={addNew.bind(this)}/>
                <FilteredList items={filteredItems} changeStatus={changeStatus.bind(this)}/>
                <Footer changeFilter={changeFilter.bind(this)} {...{count, filter}}/>
            </div>
        );
    }

    addNew(text) {
        let updatedList = addToList(this.state.items, {text, completed: false});

        this.setState({items: updatedList})
    }

    changeFilter(filter) {
        this.setState({filter});
    }

    changeStatus(itemId, completed) {
        const updatedList = updateStatus(this.state.items, itemId, completed);

        this.setState({items: updatedList});
    }
}

export default TodoList;
