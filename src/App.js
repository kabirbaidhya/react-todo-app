import React from 'react';

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

    return (
        <div className="container">
            <div className="row">
                <div className="todolist">
                    <h1>Todos</h1>
                    <ul className="list-unstyled">
                        {items.map(item => (
                            <li key={item.id} className="ui-state-default">
                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox" value=""/>
                                        {item.text}
                                    </label>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default App;
