import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

const reducer = (state={}, action) => {
  return state;
};

const logger = createLogger();
const middleware = applyMiddleware(thunk, logger);
const store = createStore(reducer, middleware);

store.dispatch((dispatch) => {
  dispatch({ type: 'INC', payload: 20 });
  dispatch({ type: 'BAR', payload: 20 })
});
