import React from 'react';
import { render } from '@testing-library/react';
import { Navigation } from './Navigation';

describe('Navigation', () => {
    it('renders correctly', () => {
        const { container } = render(<Navigation />);

        expect(container).toMatchSnapshot();
    });
});
