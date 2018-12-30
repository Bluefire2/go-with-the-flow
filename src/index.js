import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {devToolsEnhancer} from 'redux-devtools-extension';
import reducers from './reducers';
import {sample, sampleNetwork} from './graph';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const initialState = {
    graph: sample // TODO: replace with sampleNetwork
};
const store = createStore(
    reducers,
    initialState,
    devToolsEnhancer()
);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
