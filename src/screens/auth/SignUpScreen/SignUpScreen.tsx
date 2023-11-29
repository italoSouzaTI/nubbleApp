import {zodResolver} from '@hookform/resolvers/zod';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useForm} from 'react-hook-form';

import {
  Button,
  Screen,
  Text,
  FormTextInput,
  FormPasswordnput,
} from '@components';
import {useResetNavigationSucess} from '@hooks';
import {RootStackParamList} from '@routes';

import {signUpSchema, SignUpSchema} from './signUpSchema';
type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>;

export function SignUpScreen({navigation}: ScreenProps) {
  const {reset} = useResetNavigationSucess();
  const {control, formState, handleSubmit} = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: '',
      fullname: '',
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function submitForm(formValues: SignUpSchema) {
    console.log(formValues);
    reset({
      title: 'Sua conta foi criada com sucesso!',
      description: 'Agora é só fazer login na nossa plataforma',
      icon: {
        name: 'checkRound',
        color: 'success',
      },
    });
  }
  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" mb="s32">
        Criar uma conta
      </Text>
      <FormTextInput
        control={control}
        name="username"
        label="Seu username"
        placeholder="@"
        BoxProps={{mb: 's20'}}
      />
      <FormTextInput
        control={control}
        name="fullname"
        label="Nome completo"
        placeholder="Digite seu nome completo"
        BoxProps={{mb: 's20'}}
      />
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
        BoxProps={{mb: 's48'}}
      />

      <Button
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
        preset="primary"
        marginTop="s12"
        title="Criar uma conta"
      />
    </Screen>
  );
}
