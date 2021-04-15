import React from 'react';
import { ThemeProvider } from '@shared/theme';
import { Routes } from '@web/routes';

export const App = () => (
    <ThemeProvider>
        <Routes />
    </ThemeProvider>
);
