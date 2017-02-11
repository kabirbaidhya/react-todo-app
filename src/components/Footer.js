import React from 'react';

export default function Footer(props) {
    const {count} = props;

    return (
        <div className="todo-footer">
            <strong>
                <span className="count-todos">{count}</span>
            </strong>
            {' items left'}
        </div>
    );
}
