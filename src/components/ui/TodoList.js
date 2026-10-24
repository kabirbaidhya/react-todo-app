import React from 'react';
import Info from './Info';
import Header from './Header';
import Footer from './Footer';
import FilteredList from './FilteredList';
import {applyFilter, search, FILTER_ACTIVE} from '../../services/filter';

export default function TodoList(props) {
    const {list, filter, mode, query,editingItem,editingText} = props.data;
    const {addNew, changeFilter, changeStatus, changeMode, setSearchQuery,startEdit,updateItem,setEditingText} = props.actions;
    const activeItemCount = applyFilter(list, FILTER_ACTIVE).length;
    const items = search(applyFilter(list, filter), query);

    return (
        <div className="container">
            <div className="row">
                <div className="todolist">
                    <Header {...{addNew, mode, query, setSearchQuery,editingItem,editingText,setEditingText,updateItem}}/>
                    <FilteredList {...{items, changeStatus,startEdit}}/>
                    <Footer {...{activeItemCount, filter, changeFilter, mode, changeMode}}/>
                    <Info {...{mode}}/>
                </div>
            </div>
        </div>
    );
}
