import React from 'react';
import CheckBox from './CheckBox';
import { PRIORITY_HIGH, PRIORITY_MEDIUM, PRIORITY_NORMAL } from '../../services/todo';

export default function TodoItem(props) {
    const {data, changeStatus} = props;
    const handleChange = (checked) => changeStatus(data.id, checked);
    const className = 'todo-item ui-state-default ' + (data.completed === true ? 'completed' : 'pending');
    
    const getPriorityBadge = () => {
        let badgeClass = 'badge ';
        switch(data.priority) {
            case PRIORITY_HIGH:
                badgeClass += 'badge-danger';
                break;
            case PRIORITY_MEDIUM:
                badgeClass += 'badge-warning';
                break;
            case PRIORITY_NORMAL:
            default:
                badgeClass += 'badge-default';
        }
        return <span className={badgeClass} style={{marginLeft: '10px'}}>{data.priority}</span>;
    };

    return (
        <li className={className}>
            <div className="checkbox">
                <label>
                    <CheckBox checked={data.completed} onChange={handleChange}/> {data.text}
                    {getPriorityBadge()}
                </label>
            </div>
        </li>
    );
}
