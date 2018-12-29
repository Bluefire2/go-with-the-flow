import {combineReducers} from 'redux';

import graphReducer from './graph';

const rootReducer = combineReducers({
    graph: graphReducer
});

export default rootReducer;