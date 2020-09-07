import { combineReducers } from "redux";
import auth from "./auth";
import alert from "./alert";
import recipe from "./recipe";
import favourite from "./favourite";

export default combineReducers({
  alert,
  auth,
  recipe,
  favourite,
});
