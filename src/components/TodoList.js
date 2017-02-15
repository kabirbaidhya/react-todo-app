import React from 'react';
import Header from './Header';
import Footer from './Footer';
import FilteredList from './FilteredList';
import {applyFilter, search} from '../services/filter';

export default function TodoList(props) {
    const {list, filter, mode, query} = props.data;
    const {addNew, changeFilter, changeStatus, changeMode, setSearchQuery} = props.actions;
    const count = list.length;
    const items = search(applyFilter(list, filter), query);

    return (
        <div className="todolist">
            <Header {...{addNew, mode, query, setSearchQuery}}/>
            <FilteredList {...{items, changeStatus}}/>
            <Footer {...{count, filter, changeFilter, mode, changeMode}}/>
        </div>
    );
}
