import { View } from "react-native";
import { Text } from "../../../components/Text/Text";
import { TextInput } from "../../../components/TextInput/TextInput";
import { Button } from "../../../components/Button/button";
import { Screen } from "../../../components/Screen/Screen";
import { PasswordInput } from "../../../components/PasswordInput/PasswordInput";
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from "../../../routes/Routes";

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>
export function LoginScreen ({ navigation }: ScreenProps) {
    function handleToSignUpScreen () {
        navigation.navigate('SignUpScreen')
    }
    function navigateToForgotPasswordScreen () {
        navigation.navigate('ForgotPasswordScreen')
    }
    return (
        <Screen>
            <View
                style={{
                    paddingHorizontal: 24
                }}
            >
                <Text marginBottom='s8' preset='headingLarge'>Olá</Text>
                <Text mb='s40' preset='paragraphLarge'>Digite seu e-mail e senha para entrar</Text>
                <TextInput
                    label='E-mail'
                    placeholder='Digite seu e-mail'
                    BoxProps={{ mb: 's20' }}
                />
                <PasswordInput
                    label="Senha"
                    placeholder='Digite sua senha'
                />
                <Text onPress={navigateToForgotPasswordScreen} mt='s10' color='primary' preset='paragraphSmall' bold>Esqueci minha senha</Text>
                <Button
                    marginTop='s48'
                    title='Entrar'
                />
                <Button
                    onPress={handleToSignUpScreen}
                    preset='outline'
                    marginTop='s12'
                    title='Criar uma conta'
                />
            </View>
        </Screen>
    )
}