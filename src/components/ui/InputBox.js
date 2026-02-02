import React from 'react';
import enhance from '../hoc/wrapInputBox';
import { PRIORITY_HIGH, PRIORITY_MEDIUM, PRIORITY_NORMAL } from '../../services/todo';

function InputBox(props) {
    const { value, priority, handleChange, handleKeyUp, handlePriorityChange } = props;

    return (
        <div className="input-wrapper">
            <input autoFocus
                type="text"
                className="form-control add-todo"
                value={value}
                onKeyUp={handleKeyUp}
                onChange={handleChange}
                placeholder="Add New"
            />
            <select 
                className="priority-select"
                value={priority}
                onChange={handlePriorityChange}
                title="Select Priority"
            >
                <option value={PRIORITY_HIGH}>High</option>
                <option value={PRIORITY_MEDIUM}>Medium</option>
                <option value={PRIORITY_NORMAL}>Normal</option>
            </select>
        </div>
    );
}

export default enhance(InputBox);
