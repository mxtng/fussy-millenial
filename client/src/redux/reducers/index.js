import { combineReducers } from 'redux';
import alert from './alert';
import recipe from './recipe';

export default combineReducers({
	alert,
	recipe,
});
