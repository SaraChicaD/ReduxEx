import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducer from '../redux/reducers';

const reducers = combineReducers(reducer);

export const store = createStore(reducers, applyMiddleware(thunk));