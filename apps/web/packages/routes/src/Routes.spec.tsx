import React from 'react';
import { render } from '@testing-library/react';
import { Routes } from './Routes';

describe('Routes', () => {
    it('renders correctly', () => {
        const { container } = render(<Routes />);

        expect(container).toMatchSnapshot();
    });
});
