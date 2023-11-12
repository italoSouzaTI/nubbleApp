import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button } from "../../../components/Button/button";
import { Icon } from "../../../components/Icon/Icon";
import { PasswordInput } from "../../../components/PasswordInput/PasswordInput";
import { Screen } from "../../../components/Screen/Screen";
import { Text } from "../../../components/Text/Text";
import { TextInput } from "../../../components/TextInput/TextInput";
import { RootStackParamList } from "../../../routes/Routes";
import { useResetNavigationSucess } from "../../../hooks/useResetNavigationSucess";


type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>
export function SignUpScreen ({ navigation }: ScreenProps) {
    const { reset } = useResetNavigationSucess();
    function submitForm () {
        reset({
            title: "Sua conta foi criada com sucesso!",
            description: "Agora é só fazer login na nossa plataforma",
            icon: {
                name: 'checkRound',
                color: "success"
            },
        })

    }
    return (
        <Screen
            canGoBack
            scrollable
        >
            <Text preset="headingLarge" mb="s32">Criar uma conta</Text>
            <TextInput
                label="Seu username"
                placeholder="@"
                BoxProps={{ mb: 's20' }}
            />
            <TextInput
                label="Nome completo"
                placeholder="Digite seu nome completo"
                BoxProps={{ mb: 's20' }}
            />
            <TextInput
                label="E-mail"
                placeholder="Digite seu e-mail"
                BoxProps={{ mb: 's20' }}
            />
            <PasswordInput
                label="Senha"
                placeholder='Digite sua senha'
            />
            <Button
                onPress={submitForm}
                preset='primary'
                marginTop='s12'
                title='Criar uma conta'
            />
        </Screen>
    )
}