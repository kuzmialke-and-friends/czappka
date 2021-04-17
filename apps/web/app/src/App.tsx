import React from 'react';
import { ThemeProvider } from '@shared/theme';
import { Navigation } from '@web/navigation';
import { Routes } from '@web/routes';
import './App.css';

export const App = () => (
    <ThemeProvider>
        <Navigation />
        <Routes />
    </ThemeProvider>
);
