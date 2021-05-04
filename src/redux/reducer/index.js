import { combineReducers } from "redux";
import { registerAuthReducer } from "./register_auth_reducer";
import { loginAuthReducer } from "./login_auth_reducer";

export default combineReducers({
    registerAuthReducer,
    loginAuthReducer
});