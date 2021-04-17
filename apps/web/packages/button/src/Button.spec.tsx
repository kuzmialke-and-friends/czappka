import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
    it('renders correctly', () => {
        const { container } = render(<Button label="I am a button." />);

        expect(container).toMatchSnapshot();
    });

    it('renders button with icon', () => {
        const { container } = render(<Button label="I have an icon!" />);

        expect(container).toMatchSnapshot();
    });

    it('renders clickable button', () => {
        const onClick = jest.fn();
        const label = 'Click me!';

        render(<Button label={label} onClick={onClick} />);

        fireEvent.click(screen.getByLabelText(label));

        expect(onClick).toHaveBeenCalled();
    });

    it('renders with disabled button', () => {
        const onClick = jest.fn();
        const label = "Can't click me!";

        render(<Button label={label} onClick={onClick} disabled />);

        fireEvent.click(screen.getByLabelText(label));

        expect(onClick).not.toHaveBeenCalled();
    });
});
