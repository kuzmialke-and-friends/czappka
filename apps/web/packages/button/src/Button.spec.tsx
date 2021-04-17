import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
    it('renders correctly', () => {
        const { container } = render(<Button label="I am a button." />);

        expect(container).toMatchSnapshot();
    });

    it('renders with on click function', () => {
        const onClick = jest.fn();
        const label = 'Click me!';

        render(<Button label={label} onClick={onClick} />);

        fireEvent.click(screen.getByLabelText(label));

        expect(onClick).toHaveBeenCalled();
    });
});
