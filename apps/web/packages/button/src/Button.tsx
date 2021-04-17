import React from 'react';
import './Button.css';
import { Icon, IconProps } from './Icon';

export interface ButtonProps {
    onClick: () => void;
    label: string;
    disabled?: boolean;
    icon?: IconProps;
}

export const Button = ({ onClick, label, disabled = false, icon }: ButtonProps) => (
    <button type="button" onClick={onClick} aria-label={label} disabled={disabled}>
        {icon ? <Icon {...icon} /> : null}
    </button>
);
