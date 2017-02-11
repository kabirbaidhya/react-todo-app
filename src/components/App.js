import React, {Component} from 'react';
import TodoList from './TodoList';

class App extends Component {
    constructor() {
        super();
        this.state = {
            filter: 'active',
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
                    <TodoList title={title}
                        addNew={this.addNew.bind(this)}
                        changeFilter={this.changeFilter.bind(this)}
                        {...this.state}
                    />
                </div>
            </div>
        );
    }

    addNew(text) {
        let nextId = this.state.items.length + 1;
        let item = {
            id: nextId,
            text: text
        };
        let updatedList = this.state.items.concat([item]);

        this.setState({
            items: updatedList
        })
    }

    changeFilter(filter) {
        this.setState({filter});
    }
}

export default App;
