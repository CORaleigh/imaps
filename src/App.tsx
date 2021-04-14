/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useState } from 'react';
import { Shell } from './Components/Shell/Shell';
import './App.scss';
import { Actions } from './config/config';
import ThemeContext from './Components/ThemeContext';
import ActionContext from './Components/ActionContext';

function App() {
    const [theme, setTheme] = useState('dark');
    const [actions, setActions] = useState<any>(Actions);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <ActionContext.Provider value={{ actions, setActions }}>
                <Shell actions={actions} />
            </ActionContext.Provider>
        </ThemeContext.Provider>
    );
}

export default App;
