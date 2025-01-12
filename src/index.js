import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import store from './redux/store';

// ReactDOM.render(
//     //import store vào dự án react
//     <Provider store={store}>
//         <App />
//     </Provider>,
//     document.getElementById('root')
// );
const root = createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);