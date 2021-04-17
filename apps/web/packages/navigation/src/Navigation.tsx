import React, { useContext } from 'react';
import { ThemeSelectorContext } from '@shared/theme';
import './Navigation.css';

export const Navigation = () => {
    const { toggleTheme } = useContext(ThemeSelectorContext);

    return (
        <div className="navigation">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <button type="button" onClick={toggleTheme}>
                Switch theme
            </button>
        </div>
    );
};
