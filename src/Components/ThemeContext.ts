/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';

const ThemeContext = React.createContext({
    theme: 'dark',
    setTheme: (theme: string) => {
        theme = 'dark';
        console.log(theme);
    },
});

export default ThemeContext;
