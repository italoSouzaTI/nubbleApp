import React from 'react';

import { EyeOffIcon } from './EyeOffIcon';
import { EyeOnIcon } from './EyeOnIcon';
import { ThemeColors } from '../../components/theme/theme';
import { useAppTheme } from '../../hooks/useAppTheme';

export interface IconBase {
    size?: number;
    color?: String
}
interface Props {
    name: IconName,
    color?: ThemeColors,
    size?: number
}
export function Icon ({ name, color = 'backgroundContrast', size = 20 }: Props) {
    const SVGIcon = iconRegistry[name];
    const { colors } = useAppTheme()
    return (<SVGIcon color={colors[color]} size={size} />)
}

const iconRegistry = {
    eyeOn: EyeOnIcon,
    eyeOff: EyeOffIcon
}

type IconType = typeof iconRegistry;
type IconName = keyof IconType