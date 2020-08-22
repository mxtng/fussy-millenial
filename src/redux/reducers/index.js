import { combineReducers } from 'redux';
import search from './searchReducer';
import alert from './alert';

export default combineReducers({
	search,
	alert
});
