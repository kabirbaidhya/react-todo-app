import React, {Component} from 'react';
import TodoList from './TodoList';

class App extends Component {
    constructor() {
        super();
        this.state = {
            items: [
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
            ]
        }
    }

    render() {
        let title = 'Things to do';

        return (
            <div className="container">
                <div className="row">
                    <TodoList title={title} items={this.state.items}/>
                </div>
            </div>
        );
    }
}

export default App;
