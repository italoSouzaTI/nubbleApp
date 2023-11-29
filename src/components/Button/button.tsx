import {Text, TouchableOpacityBox, ActivityIndicator} from '@components';

import {ButtonPresets, IBUttonProps} from './buttonPresets';

export type ButtonPreset = 'primary' | 'outline' | '';

export function Button({
  loading,
  title,
  preset = 'primary',
  disabled,
  ...TTouchableOpacityBoxProps
}: IBUttonProps) {
  const buttonPreset = ButtonPresets[preset][disabled ? 'disabled' : 'default'];

  return (
    <TouchableOpacityBox
      disabled={disabled || loading}
      paddingHorizontal="s20"
      height={50}
      alignItems="center"
      justifyContent="center"
      borderRadius="s16"
      {...buttonPreset.container}
      {...TTouchableOpacityBoxProps}>
      {loading ? (
        <ActivityIndicator color={buttonPreset.content} />
      ) : (
        <Text preset="paragraphMedium" bold color={buttonPreset.content}>
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
