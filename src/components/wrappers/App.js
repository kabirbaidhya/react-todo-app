import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import TodoList from '../ui/TodoList';
import FocusTimer from '../ui/FocusTimer';
import Analytics from '../ui/Analytics';
import KeyStrokeHandler from './KeyStrokeHandler';

class App extends Component {
    render() {
        return (
            <Router>
                <KeyStrokeHandler>
                    <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light mt-3">
                            <Link className="navbar-brand" to="/">Todo List</Link>
                            <div className="collapse navbar-collapse">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/focus">Focus Mode</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/analytics">Analytics</Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        <Route path="/" exact render={(props) => <TodoList data={this.props.data} actions={this.props.actions} {...props} />} />
                        <Route path="/focus" render={(props) => <FocusTimer data={this.props.data} actions={this.props.actions} {...props} />} />
                        <Route path="/analytics" render={(props) => <Analytics data={this.props.data} actions={this.props.actions} {...props} />} />
                    </div>
                </KeyStrokeHandler>
            </Router>
        );
    }
}

export default App;
