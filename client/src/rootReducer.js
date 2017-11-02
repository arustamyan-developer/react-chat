import {combineReducers} from "redux";
import userReducer from "./reducers/userReducer";
import messagesReducer from "./reducers/messagesReducer";

export default combineReducers({
    userReducer,
    messagesReducer
})