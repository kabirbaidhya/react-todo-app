import React from 'react';
import CheckBox from './CheckBox';
import { PRIORITY_HIGH, PRIORITY_MEDIUM } from '../../services/todo';

export default function TodoItem(props) {
    const {data, changeStatus} = props;
    const handleChange = (checked) => changeStatus(data.id, checked);
    const className = 'todo-item ui-state-default ' + (data.completed === true ? 'completed' : 'pending');
    
    const getPriorityClass = (priority) => {
        switch(priority) {
            case PRIORITY_HIGH:
                return 'priority-badge priority-high';
            case PRIORITY_MEDIUM:
                return 'priority-badge priority-medium';
            default:
                return 'priority-badge priority-normal';
        }
    };

    return (
        <li className={className}>
            <div className="checkbox">
                <label>
                    <CheckBox checked={data.completed} onChange={handleChange}/> 
                    <span className="todo-text">{data.text}</span>
                    <span className={getPriorityClass(data.priority)}>{data.priority}</span>
                </label>
            </div>
        </li>
    );
}
