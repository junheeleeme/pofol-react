// types.js -> reducer.js -> rootReducer.js

import LoadEffect from "../../components/LoadEffect";
import { SET_PORTFOLIO } from "./types";

const initialState = {
    pofol : ''
}

const pofolReducer = (state = initialState, action) => {

    switch(action.type){

        case SET_PORTFOLIO : { 
            return {
                ...state,
                pofol : action.data
            }
        }
        default : return state
        
    }
}

export default pofolReducer;