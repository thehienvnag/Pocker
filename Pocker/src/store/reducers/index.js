import { combineReducers } from "redux";
import user from "./user";
import players from "./players";
import game from "./game";

const rootReducer = combineReducers({
  user,
  players,
  game
});
export default rootReducer;
