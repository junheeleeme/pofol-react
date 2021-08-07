// types.js -> reducer.js -> rootReducer.js

import { SET_THEME_MODE, SET_THEME } from "./types";
import { dark, light } from "../../theme/theme";

const initialState = {
    themeMode : 'dark',
    theme : {
        colors : {
            bgColor : '#000',
            textColor : '#fff',
        }
    }
}

const themeReducer = (state = initialState, action) => {

    switch(action.type){

        case SET_THEME_MODE : { 
            const _theme = action.data === 'dark' ? dark : light;
            return {
                ...state,
                themeMode : action.data,
                theme : _theme
            }
        }
        case SET_THEME : { 
            
            return {
                ...state,
                theme : action.data
            }
        }

        default : return state
        
    }
}

export default themeReducer;