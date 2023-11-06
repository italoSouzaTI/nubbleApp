import { useTheme } from '@shopify/restyle';
import React from 'react';
import { Theme } from '../components/theme/theme';

export function useAppTheme () {
    return useTheme<Theme>();
}