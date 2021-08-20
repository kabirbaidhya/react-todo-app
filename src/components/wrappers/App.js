import React, {Component} from 'react';
import TodoList from '../ui/TodoList';
import StateProvider from './StateProvider';
import KeyStrokeHandler from './KeyStrokeHandler';
import Footer from '../Footer';
import Header from '../Headr';
class App extends Component {
    render() {
        return (
            <div> 
            <Header/>

            
            <StateProvider>
                <KeyStrokeHandler>
                    <TodoList/>
                </KeyStrokeHandler>
            </StateProvider>
            <Footer/>
            </div>
        );
    }
}

export default App;
