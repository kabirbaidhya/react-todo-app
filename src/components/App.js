import React, {Component} from 'react';
import TodoList from './TodoList';
import {FILTER_ACTIVE} from './../services/filter';
import {getAll, createNew} from './../services/todo';

class App extends Component {
    constructor() {
        super();
        this.state = {
            filter: FILTER_ACTIVE,
            items: getAll()
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
        let item = createNew(text);
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
