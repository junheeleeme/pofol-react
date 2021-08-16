// types.js -> reducer.js -> rootReducer.js
import { SET_PORTFOLIO, SET_CURRENT } from "./types";

const initialState = {
    pofol : '',
    currentPofol : {
        "title" : '',
        "type" : '',
        "content" : '',
        "skills" : ['', '', '', ''],
        "link" : ['', '']
    }
}

const pofolReducer = (state = initialState, action) => {

    switch(action.type){

        case SET_PORTFOLIO : { 
            return {
                ...state,
                pofol : action.data
            }
        }
        case SET_CURRENT : { 
            return {
                ...state,
                currentPofol : state.pofol[action.data]
            }
        }
        default : return state
        
    }
}

export default pofolReducer;