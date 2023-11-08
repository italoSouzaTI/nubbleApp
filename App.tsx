import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { theme } from './src/components/theme/theme';
import { ThemeProvider } from '@shopify/restyle';
import { Button } from './src/components/Button/button';
import { Icon } from './src/components/Icon/Icon';
import { Text } from './src/components/Text/Text';
import { Box } from './src/components/Box/Box';
import { TextInput } from './src/components/TextInput/TextInput';


function App (): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
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
          <TextInput
            RightComponet={
              <Icon color='gray2' name='eyeOn' />}
            errorMessage='Mensagem de error'
            label='Senha'
            placeholder='Digite sua senha'
            BoxProps={{ mb: 's10' }}
          />
          <Text mt='s10' color='primary' preset='paragraphSmall' bold>Esqueci minha senha</Text>
          <Button
            marginTop='s48'
            title='Entrar'
          />
          <Button
            preset='outline'
            marginTop='s12'
            title='Criar uma conta'
          />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
