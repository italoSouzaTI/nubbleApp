import { TTouchableOpacityBoxProps } from "../Box/Box";
import { ThemeColors } from "../theme/theme";
import { ButtonPreset } from "./button";

export interface ButtonUI {
    container: TTouchableOpacityBoxProps,
    content: ThemeColors;
}

export interface IBUttonProps extends TTouchableOpacityBoxProps {
    title: string,
    loading?: boolean,
    preset?: ButtonPreset
}
export const ButtonPresets: Record<ButtonPreset, ButtonUI> = {
    primary: {
        container: {
            backgroundColor: 'primary'
        },
        content: 'primaryContrast'
    },
    outline: {
        container: {
            borderWidth: 1,
            borderColor: 'primary'
        },
        content: 'primary'
    },
    secondary: {
        container: {
            backgroundColor: 'carrotSecondary'
        },
        content: 'primaryContrast'
    }
};