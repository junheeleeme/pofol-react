// types.js -> reducer.js -> rootReducer.js

import { SET_ISVISIBLE, SET_ISMOUNT, SET_CURRENT_MENU } from "./types";

const initialState = {
    isVisible : false,
    isMount : 'mountSlideLeft', //mountSlideLeft,unmountSlideLeft,mountSlideRigt, unmountSlideRight 
    currentMenu : '',
    route : [
        { id : 0, path : '/' },
        { id : 1,  path : '/about' },
        { id : 2,  path : '/skill' },
        { id : 3,  path : '/portfolio' },
        { id : 4,  path : '/contact' }
    ]
}

const menuReducer = (state = initialState, action) => {

    switch(action.type){

        case SET_ISVISIBLE : { 
            return {
                ...state,
                isVisible : action.data
            }
        }
        case SET_ISMOUNT : { 
            return {
                ...state,
                isMount : action.data
            }
        }
        case SET_CURRENT_MENU : { 
            return {
                ...state,
                currentMenu : action.data
            }
        }

        default : return state
        
    }
}

export default menuReducer;