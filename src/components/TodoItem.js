import React from 'react';
import CheckBox from './CheckBox';

export default function TodoItem(props) {
    const {data, completed} = props;

    return (
        <li className="ui-state-default">
            <div className="checkbox">
                <label>
                    <CheckBox checked={completed}/> {data.text}
                </label>
            </div>
        </li>
    );
}
