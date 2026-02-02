import React from 'react';
import enhance from '../hoc/wrapInputBox';
import { PRIORITY_HIGH, PRIORITY_MEDIUM, PRIORITY_NORMAL } from '../../services/todo';

function InputBox(props) {
    const { value, handleChange, handleKeyUp, priority, handlePriorityChange } = props;

    return (
        <div className="input-group">
            <input autoFocus
                type="text"
                className="form-control add-todo"
                value={value}
                onKeyUp={handleKeyUp}
                onChange={handleChange}
                placeholder="Add New"
            />
            <div className="input-group-btn">
                <select 
                    className="form-control" 
                    value={priority}
                    onChange={handlePriorityChange}
                    style={{ width: '120px' }}
                >
                    <option value={PRIORITY_HIGH}>High</option>
                    <option value={PRIORITY_MEDIUM}>Medium</option>
                    <option value={PRIORITY_NORMAL}>Normal</option>
                </select>
            </div>
        </div>
    );
}

export default enhance(InputBox);
