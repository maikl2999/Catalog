import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/main.css';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)