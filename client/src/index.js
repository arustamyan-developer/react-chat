import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import createStore from "./store";
import {Provider} from "react-redux";
import ws from './utils/ws';

window.ws = ws;

let store = createStore;

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('wrapper')
);
registerServiceWorker();
