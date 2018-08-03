import { combineReducers } from "redux";
import coinsReducer from "reducers/coins";

export default combineReducers({
  coins: coinsReducer
});
