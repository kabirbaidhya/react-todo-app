import React, { useState, useCallback } from 'react';
import TodoList from './TodoList';

const ITEMS_DEFAULT = [
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
const FILTER_DEFAULT = 'active';

function App() {
  const title = 'Things to do';
  const [items, updateItems] = useState(ITEMS_DEFAULT);
  const [filter, setFilter] = useState(FILTER_DEFAULT);
  const addNewItem = useCallback(
    text => {
      updateItems(items => {
        const nextId = items.length + 1;
        const newItem = {
          id: nextId,
          text: text
        };

        return [...items, newItem];
      });
    },
    [updateItems]
  );
  const changeFilter = useCallback(value => setFilter(value), [setFilter]);

  return (
    <div className="container">
      <div className="row">
        <TodoList title={title} items={items} filter={filter} addNewItem={addNewItem} changeFilter={changeFilter} />
      </div>
    </div>
  );
}

export default App;
