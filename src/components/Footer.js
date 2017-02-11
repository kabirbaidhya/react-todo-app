import React from 'react';
import Filter from './Filter';

export default function Footer(props) {
    const {count} = props;

    return (
        <div className="todo-footer clearfix">
            <div className="pull-left">
                <strong>
                    <span className="count-todos">{count}</span>
                </strong>
                {' items left'}
            </div>
            <div className="pull-right">
                <Filter/>
            </div>
        </div>
    );
}
