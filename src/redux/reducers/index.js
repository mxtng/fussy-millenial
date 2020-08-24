import { combineReducers } from 'redux';
import search from './searchReducer';
import alert from './alert';
import recipe from './recipe';
import favourite from './favourite';

export default combineReducers({
	search,
	alert,
	recipe,
	favourite
});
