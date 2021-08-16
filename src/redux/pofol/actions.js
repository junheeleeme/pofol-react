

// types.js -> actions.js -> index.js

import { SET_PORTFOLIO, SET_CURRENT } from "./types";

export const setPofol = (pofol) => ({ 
    type : SET_PORTFOLIO,
    data : pofol
});

export const setCurrent = (pofol) => ({
    type : SET_CURRENT,
    data : pofol
})