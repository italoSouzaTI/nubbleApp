import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button } from "../../../components/Button/button";
import { Icon } from "../../../components/Icon/Icon";
import { Screen } from "../../../components/Screen/Screen";
import { Text } from "../../../components/Text/Text";
import { TextInput } from "../../../components/TextInput/TextInput";
import { RootStackParamList } from "../../../routes/Routes";
import { useResetNavigationSucess } from "../../../hooks/useResetNavigationSucess";


type ScreenProps = NativeStackScreenProps<RootStackParamList, 'ForgotPasswordScreen'>
export function ForgotPasswordScreen ({ navigation }: ScreenProps) {
    const { reset } = useResetNavigationSucess()
    function submitForm () {
        reset({
            title: `Enviamos as instruções ${'\n'}para seu e-mail`,
            description: 'Clique no link enviado no seu e-mail para recuperar sua senha',
            icon: {
                name: "messageRound",
                color: 'primary'
            }
        })
    }
    return (
        <Screen canGoBack>
            <Text preset="headingLarge" mb='s16'>Esqueci minha senha</Text>
            <Text preset="paragraphLarge" mb='s32'>Digite seu e-mail e enviaremos as instruções para redefinição de senha</Text>
            <TextInput
                // errorMessage="Digite um e-mail válido"
                BoxProps={{ mb: 's40' }}
                placeholder="Digite seu e-mail"
                label="E-mail"
            />
            <Button
                mt='s40'
                onPress={submitForm}
                title="Recuperar senha"
            />
        </Screen>
    )
}