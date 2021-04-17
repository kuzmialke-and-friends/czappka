import React from 'react';
import { render } from '@testing-library/react';
import { Routes } from './Routes';

it('renders learn react link', () => {
    const { container } = render(<Routes />);

    expect(container).toMatchSnapshot();
});
