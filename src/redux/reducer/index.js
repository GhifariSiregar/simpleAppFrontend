import { combineReducers } from "redux";
import { registerAuthReducer } from "./registerAuthReducer";
import { loginAuthReducer } from "./loginAuthReducer";

export default combineReducers({
    registerAuthReducer,
    loginAuthReducer
});