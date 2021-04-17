import React from 'react';
import { useTheme } from '@shared/theme';
import { Button, IconProps } from '@web/button';
import './Navigation.css';

const themeToIcon: Record<string, IconProps['name']> = {
    dark: 'sun',
    light: 'moon',
};

export const Navigation = () => {
    const { toggleTheme, themeName } = useTheme();

    const iconProps: IconProps = {
        name: themeToIcon[themeName],
    };

    return (
        <header>
            <nav>
                <a href="/">Home</a>
                <a href="/about">About</a>
            </nav>
            <Button onClick={toggleTheme} label="Switch theme." icon={iconProps} />
        </header>
    );
};
