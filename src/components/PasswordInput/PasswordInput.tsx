import { useState } from "react";
import { Icon } from "../Icon/Icon";
import { TextInput, TextInputProps } from "../TextInput/TextInput";

type PasswordInputProps = Omit<TextInputProps, 'RightComponet'>;

export function PasswordInput (props: PasswordInputProps) {
    const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);

    function toggleSecureTextEntry () {
        setIsSecureTextEntry(state => !state);
    };

    return (
        <TextInput
            {...props}
            RightComponet={
                <Icon
                    onPress={toggleSecureTextEntry}
                    color='gray2'
                    name={isSecureTextEntry ? 'eyeOn' : 'eyeOff'} />
            }
            secureTextEntry={isSecureTextEntry}
            BoxProps={{ mb: 's48' }}

        />
    )
}