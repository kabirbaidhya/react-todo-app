import React from 'react';
import TodoItem from './TodoItem';

function TodoList(props) {
    const {title, items} = props;

    return (
        <div className="todolist">
            <h1>{title.toUpperCase()}</h1>
            <ul className="list-unstyled">
                {items.map(item => <TodoItem key={item.id} data={item}/>)}
            </ul>
        </div>
    );
}

export default TodoList;
