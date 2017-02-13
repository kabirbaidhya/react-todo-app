import React, {Component} from 'react';
import TodoList from './TodoList';

class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <TodoList/>
                </div>
            </div>
        );
    }
}

export default App;
