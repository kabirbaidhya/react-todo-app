import React from 'react';

function TodoList(props) {
    const {title, items} = props;

    return (
        <div className="todolist">
            <h1>{title.toUpperCase()}</h1>
            <ul className="list-unstyled">
                {items.map(item => <TodoItem data={item}/>)}
            </ul>
        </div>
    );
}

function TodoItem(props) {
    const {data} = props;

    return (
        <li key={data.id} className="ui-state-default">
            <div className="checkbox">
                <label>
                    <input type="checkbox" value=""/> {data.text}
                </label>
            </div>
        </li>
    );
}

export default TodoList;
