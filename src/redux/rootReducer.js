// types.js -> reducer.js -> rootReducer.js

import { combineReducers } from "redux";
import menuReducer from "./menu/reducer";

const rootReducer = combineReducers({
    menu : menuReducer
})

export default rootReducer;