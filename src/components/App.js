import React, { useState } from 'react';
import TodoList from './TodoList';

const ITEMS_INITIAL_STATE = [
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

function App() {
  const title = 'Things to do';
  const [items] = useState(ITEMS_INITIAL_STATE);

  return (
    <div className="container">
      <div className="row">
        <TodoList title={title} items={items} />
      </div>
    </div>
  );
}

export default App;
