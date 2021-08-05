

// types.js -> actions.js -> index.js

import { SET_ISVISIBLE } from "./types";

export const setIsVisivle = (bool) => ({ 
    type : SET_ISVISIBLE,
    data : bool
});
