import React from 'react';
import Header from './Header';
import Footer from './Footer';
import TodoItem from './TodoItem';
import {applyFilter} from './../services/filter';

function TodoList(props) {
    const {title, items, addNew, filter, changeFilter} = props;
    const count = items.length;

    const filteredList = applyFilter(items, filter);

    return (
        <div className="todolist">
            <Header title={title} addNew={addNew}/>

            <ul className="list-unstyled">
                {filteredList.map(item => <TodoItem key={item.id} data={item}/>)}
            </ul>
            <Footer {...{count, filter, changeFilter}}/>
        </div>
    );
}

export default TodoList;
