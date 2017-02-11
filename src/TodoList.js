import React from 'react';

function TodoList(props) {
    const {title, items} = props;

    return (
        <div className="todolist">
            <h1>{title.toUpperCase()}</h1>
            <ul className="list-unstyled">
                {items.map(item => (
                    <li key={item.id} className="ui-state-default">
                        <div className="checkbox">
                            <label>
                                <input type="checkbox" value=""/> {item.text}
                            </label>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
