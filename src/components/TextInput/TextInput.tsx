import {useRef} from 'react';
import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from 'react-native';

import {useAppTheme} from '@hooks';

import {Box, BoxProps} from '../Box/Box';
import {$fontFamily, $fontSizes, Text} from '../Text/Text';

export interface TextInputProps extends RNTextInputProps {
  label: string;
  errorMessage?: string;
  RightComponet?: React.ReactElement;
  BoxProps?: BoxProps;
}
export function TextInput({
  label,
  errorMessage,
  RightComponet,
  BoxProps,
  ...rnTextInputProps
}: TextInputProps) {
  const {colors} = useAppTheme();
  const inputRef = useRef<RNTextInput>(null);
  function focusInput() {
    inputRef.current?.focus();
  }
  return (
    <Box {...BoxProps}>
      <Pressable onPress={focusInput}>
        <Text mb="s4" preset="paragraphMedium" bold>
          {label}
        </Text>
        <Box
          flexDirection="row"
          padding="s16"
          borderWidth={errorMessage ? 2 : 1}
          borderColor={errorMessage ? 'error' : 'gray4'}
          borderRadius="s12">
          <RNTextInput
            ref={inputRef}
            autoCapitalize="none"
            placeholderTextColor={colors.gray2}
            style={{
              flexGrow: 1,
              flexShrink: 1,
              padding: 0,
              fontFamily: $fontFamily.regular,
              ...$fontSizes.paragraphMedium,
            }}
            {...rnTextInputProps}
          />
          {RightComponet && (
            <Box justifyContent="center" ml="s16">
              {RightComponet}
            </Box>
          )}
        </Box>

        {errorMessage && (
          <Text preset="paragraphSmall" color="error" bold>
            {errorMessage}
          </Text>
        )}
      </Pressable>
    </Box>
  );
}
