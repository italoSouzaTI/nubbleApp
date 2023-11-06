import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { theme } from './src/components/theme/theme';
import { ThemeProvider } from '@shopify/restyle';
import { Button } from './src/components/Button/button';

function App (): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View
          style={{
            paddingHorizontal: 24
          }}
        >
          <Button
            title='primary'
            margin='s12'
          />
          <Button
            title='Outline'
            preset="outline"
            margin='s12'
          />
          <Button
            title='secondary'
            preset="secondary"
            margin='s12'
          />
          <Button
            title='dfd'
            loading
            margin='s12'
          />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
