'use strict';

import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from './reducers';

const loggerMiddleware = createLogger({ 
	predicate: (getState, action) => __DEV__,
	collapsed: true,
	duration: true,
});
const middleware = applyMiddleware(thunk, loggerMiddleware);

export default createStore(reducer, middleware);

