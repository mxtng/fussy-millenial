import { combineReducers } from 'redux';
import search from './searchReducer';
import alert from './alert';
import recipe from './recipe';

export default combineReducers({
	search,
	alert,
	recipe
});
