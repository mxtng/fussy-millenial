import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

const middlewares = [ thunk ];

if (process.env.NODE_ENV === 'development') {
	middlewares.push(require('redux-logger').default);
}

export default createStore(reducer, applyMiddleware(...middlewares));
