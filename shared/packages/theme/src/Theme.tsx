import React, { createContext, FunctionComponent, useContext, useEffect, useState } from 'react';

const themes = {
    dark: {
        color: '#A3B4C8',
        'highlight-color-1': '#CC6D3D',
        'highlight-color-2': '#B74803',
        'background-color': '#022E51',
    },
    light: {
        color: '#285185',
        'highlight-color-1': '#D67940',
        'highlight-color-2': '#6F4849',
        'background-color': '#CCD9E2',
    },
};

type Theme = keyof typeof themes;
type Variables = typeof themes.dark & typeof themes.light;

const ThemeSelectorContext = createContext({
    themeName: 'dark',
    toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeSelectorContext);

const setCSSVariables = (theme: Variables) => {
    Object.entries(theme).forEach(([variableName, variable]) => {
        document.documentElement.style.setProperty(`--${variableName}`, variable);
    });
};

export const ThemeProvider: FunctionComponent = ({ children }) => {
    const [themeName, setThemeName] = useState<Theme>('dark');
    const [theme, setTheme] = useState(themes[themeName]);

    useEffect(() => {
        setCSSVariables(theme);
    }, [theme]);

    const toggleTheme = () => {
        if (theme === themes.dark) {
            setTheme(themes.light);
            setThemeName('light');
        } else {
            setTheme(themes.dark);
            setThemeName('dark');
        }
    };

    return <ThemeSelectorContext.Provider value={{ toggleTheme, themeName }}>{children}</ThemeSelectorContext.Provider>;
};
