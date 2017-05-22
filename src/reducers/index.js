import { combineReducers } from 'redux';
import { reducer } from './CarnetReducers';

export default combineReducers({
  carnetReducers: reducer
});
