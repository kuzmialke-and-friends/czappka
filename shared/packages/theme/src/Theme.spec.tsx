import React from 'react';
import { render } from '@testing-library/react';
import { renderHook, cleanup } from '@testing-library/react-hooks';
import { useTheme, ThemeProvider } from './Theme';

afterEach(cleanup);

describe('theme', () => {
    it('renders correctly', () => {
        const { container } = render(
            <ThemeProvider>
                <div>test</div>
            </ThemeProvider>,
        );

        expect(container).toMatchSnapshot();
    });

    it('useTheme return correct context', () => {
        const { result } = renderHook(() => useTheme());
        expect(result.current).toMatchObject({
            red: '#ff0000',
            green: '#00ff00',
            blue: '#0000ff',
        });
    });
});
