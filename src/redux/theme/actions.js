

// types.js -> actions.js -> index.js

import { SET_THEME_MODE, SET_THEME } from "./types";

export const setThemeMode = (string) => ({ 
    type : SET_THEME_MODE,
    data : string
});

export const setTheme = (theme) => ({ 
    type : SET_THEME,
    data : theme
});