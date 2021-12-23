import React from 'react'

function App() {
  let items = [
    {
      id: 1,
      text: 'Learn Javascript',
      completed: false
    },
    {
      id: 2,
      text: 'Learn React',
      completed: false
    },
    {
      id: 3,
      text: 'Build a React App',
      completed: false
    }
  ];
  let title = 'Things to do';

  return (
    <div className="container">
      <div className="row">
        <div className="todolist">
          <h1>{title.toUpperCase()}</h1>
          <ul className="list-group list-group-flush">
            {items.map(item =>
              <li key={item.id} className="list-group-item">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id={`todo-item-check-${item.id}`} />
                  <label className="form-check-label" htmlFor={`todo-item-check-${item.id}`}>{item.text}</label>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
