
import { Text } from "../Text/Text";
import { TouchableOpacityBox } from "../Box/Box";
import { ButtonPresets, IBUttonProps } from "./buttonPresets";
import { ActivityIndicator } from "../ActivityIndicator.tsx";

export type ButtonPreset = 'primary' | 'outline' | 'secondary';



export function Button ({
    loading,
    title,
    preset = 'primary',
    ...TTouchableOpacityBoxProps
}: IBUttonProps) {

    const buttonPreset = ButtonPresets[preset]

    return (
        <TouchableOpacityBox
            paddingHorizontal="s20"
            height={50}
            alignItems="center"
            justifyContent="center"
            borderRadius="s16"
            {...buttonPreset.container}
            {...TTouchableOpacityBoxProps}
        >
            {loading ? (
                <ActivityIndicator />
            ) : (
                <Text
                    preset="paragraphMedium"
                    bold
                    color={buttonPreset.content}
                >{title}</Text>
            )}
        </TouchableOpacityBox>
    )
}