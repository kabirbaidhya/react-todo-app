import React from 'react';

export default function Footer(props) {
    return (
        <div className="todo-footer">
            <strong>
                <span className="count-todos">0</span>
            </strong>
            {' items left'}
        </div>
    );
}
