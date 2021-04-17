import React from 'react';
import { Icon, IconProps } from './Icon';
import './Button.css';

export interface ButtonProps {
    onClick?: () => void;
    label: string;
    disabled?: boolean;
    icon?: IconProps;
}

export const Button = ({ onClick, label, disabled = false, icon }: ButtonProps) => (
    <button type="button" onClick={onClick} aria-label={label} disabled={disabled}>
        {icon ? <Icon {...icon} /> : null}
        <p> label</p>
    </button>
);
