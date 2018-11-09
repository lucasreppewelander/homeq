import thunk from 'redux-thunk';
import {createStore, combineReducers,
	compose, applyMiddleware} from 'redux';

import MainReducer from './reducers/MainReducer';

let composeEnhancers = compose;
if (process.env.ENV === 'development' && typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function') {
	composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
}

const store = createStore(
	combineReducers({
		MainReducer
	}),
	composeEnhancers(
		applyMiddleware(thunk)
	)
);

export default store;