import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/wrappers/App';
import StateProvider from './components/wrappers/StateProvider';

// Add bootstrap
import 'bootstrap/dist/css/bootstrap.css';

// Add our style
import './assets/style/index.css';

ReactDOM.render(
    <StateProvider>
        <App />
    </StateProvider>,
    document.getElementById('root')
);
