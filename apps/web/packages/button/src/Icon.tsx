import React from 'react';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { faMoon as faMoonRegular, faSun as faSunRegular } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconDefinition } from '@fortawesome/fontawesome-common-types';

export type IconType = 'regular' | 'solid';

export type IconName = 'moon' | 'sun';

const faIcon: Record<IconName, Record<IconType, IconDefinition>> = {
    moon: {
        solid: faMoon,
        regular: faMoonRegular,
    },
    sun: {
        solid: faSun,
        regular: faSunRegular,
    },
};

export interface IconProps {
    name: IconName;
    type?: IconType;
}

export const Icon = ({ name, type = 'solid' }: IconProps) => <FontAwesomeIcon icon={faIcon[name][type]} />;
