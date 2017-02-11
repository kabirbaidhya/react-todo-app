import React from 'react';
import Header from './Header';
import TodoItem from './TodoItem';

function TodoList(props) {
    const {title, items} = props;

    return (
        <div className="todolist">
            <Header title={title} />

            <ul className="list-unstyled">
                {items.map(item => <TodoItem key={item.id} data={item}/>)}
            </ul>
        </div>
    );
}

export default TodoList;
