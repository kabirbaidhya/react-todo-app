import React from 'react';

function TodoItem(props) {
  const { data } = props;

  return (
    <li key={data.id} className="list-group-item">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id={`todo-item-check-${data.id}`} />
        <label className="form-check-label" htmlFor={`todo-item-check-${data.id}`}>
          {data.text}
        </label>
      </div>
    </li>
  );
}

export default TodoItem;
