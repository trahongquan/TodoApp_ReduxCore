import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(
    //import store vào dự án react
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);