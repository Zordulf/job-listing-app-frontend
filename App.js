import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import AppNavigator from './navigation/AppNavigator';
import store from './redux/store';

const loadFonts = () => {
  return Font.loadAsync({
    'Ubuntu': require('./assets/fonts/Ubuntu-Regular.ttf'),
    'Ubuntu-Bold': require('./assets/fonts/Ubuntu-Bold.ttf')
  });
}

export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false);

  if(!fontLoaded) {
    return (
      <AppLoading 
        startAsync={loadFonts}
        onFinish={() => setFontLoaded(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
