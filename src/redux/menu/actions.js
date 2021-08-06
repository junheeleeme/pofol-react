

// types.js -> actions.js -> index.js

import { SET_ISVISIBLE, SET_ISMOUNT, SET_CURRENT_MENU } from "./types";

export const setIsVisible = (bool) => ({ 
    type : SET_ISVISIBLE,
    data : bool
});

export const setIsMount = (isMount) => ({
    type : SET_ISMOUNT,
    data : isMount
});

export const setCurrentMenu = (idx) => ({
    type : SET_CURRENT_MENU,
    data : idx
})