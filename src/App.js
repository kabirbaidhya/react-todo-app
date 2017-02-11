import React from 'react';

function App() {
    let items = [
        {
            text: 'Learn Javascript',
            completed: false
        },
        {
            text: 'Learn React',
            completed: false
        },
        {
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
                            <li className="ui-state-default">
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
