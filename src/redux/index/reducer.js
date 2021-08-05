// types.js -> reducer.js -> rootReducer.js

import { SET_ISVISIBLE } from "./types";

const initialState = {
    isVisible : false
}

const indexReducer = (state = initialState, action) => {

    switch(action.type){

        case SET_ISVISIBLE : {  //*
            return {
                ...state,
                isVisible : action.data
            }
        }

        default : return state
        
    }
}

export default indexReducer;