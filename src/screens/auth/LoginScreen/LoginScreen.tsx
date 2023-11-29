import {Alert, View} from 'react-native';

import {zodResolver} from '@hookform/resolvers/zod';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useForm} from 'react-hook-form';

import {
  Text,
  Button,
  Screen,
  FormTextInput,
  FormPasswordnput,
} from '@components';
import {RootStackParamList} from '@routes';

import {LoginSchema, loginSchema} from './LoginSchema';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

export function LoginScreen({navigation}: ScreenProps) {
  const {control, formState, handleSubmit} = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });
  function submitForm(formValues: LoginSchema) {
    Alert.alert(
      `Email: ${formValues.email} ${'\n'} Senha: ${formValues.password}`,
    );
  }
  function handleToSignUpScreen() {
    navigation.navigate('SignUpScreen');
  }
  function navigateToForgotPasswordScreen() {
    navigation.navigate('ForgotPasswordScreen');
  }
  return (
    <Screen scrollable>
      <View
        style={{
          paddingHorizontal: 24,
        }}>
        <Text marginBottom="s8" preset="headingLarge">
          Olá
        </Text>
        <Text mb="s40" preset="paragraphLarge">
          Digite seu e-mail e senha para entrar
        </Text>
        <FormTextInput
          control={control}
          name="email"
          label="E-mail"
          placeholder="Digite seu e-mail"
          BoxProps={{mb: 's20'}}
        />
        <FormPasswordnput
          control={control}
          name="password"
          label="Senha"
          placeholder="Digite sua senha"
        />

        <Text
          onPress={navigateToForgotPasswordScreen}
          mt="s10"
          color="primary"
          preset="paragraphSmall"
          bold>
          Esqueci minha senha
        </Text>
        <Button
          onPress={handleSubmit(submitForm)}
          disabled={!formState.isValid}
          marginTop="s48"
          title="Entrar"
        />
        <Button
          onPress={handleToSignUpScreen}
          preset="outline"
          marginTop="s12"
          title="Criar uma conta"
        />
      </View>
    </Screen>
  );
}
