import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thundMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import mainReducer from '../reducers';

const logger = createLogger({collapse: true});
const middleware = composeWithDevTools(applyMiddleware(thundMiddleware, logger));
const store = createStore(mainReducer, middleware);

export default store;
