import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// Add bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

// Add our style
import './style/index.css';

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
