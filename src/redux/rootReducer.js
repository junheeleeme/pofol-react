// types.js -> reducer.js -> rootReducer.js

import { combineReducers } from "redux"
import menuReducer from "./menu/reducer"
import themeReducer from './theme/reducer'

const rootReducer = combineReducers({
    menu : menuReducer,
    theme : themeReducer
})

export default rootReducer;