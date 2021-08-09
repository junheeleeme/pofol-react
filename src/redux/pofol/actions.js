

// types.js -> actions.js -> index.js

import { SET_PORTFOLIO } from "./types";

export const setPorfol = (pofol) => ({ 
    type : SET_PORTFOLIO,
    data : pofol
});