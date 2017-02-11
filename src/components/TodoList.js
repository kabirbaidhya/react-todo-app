import React from 'react';
import Header from './Header';
import Footer from './Footer';
import TodoItem from './TodoItem';
import {applyFilter} from './../services/filter';

function TodoList(props) {
    const {title, items, addNew, filter, changeFilter, changeStatus} = props;
    const count = items.length;
    const filteredList = applyFilter(items, filter);

    return (
        <div className="todolist">
            <Header title={title} addNew={addNew}/>
            {filteredList.length > 0
                ? (
                    <ul className="list-unstyled">
                        {filteredList.map(item => (
                            <TodoItem key={item.id} data={item} changeStatus={changeStatus} />
                        ))}
                    </ul>
                )
                : <p className="alert alert-info">There are no items.</p>
            }
            <Footer {...{count, filter, changeFilter}}/>
        </div>
    );
}

export default TodoList;
