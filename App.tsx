import { SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'

import SplashScreen from 'react-native-splash-screen'
import AppNavigator from './src/navigation/AppNavigator'

const App = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      SplashScreen.hide();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AppNavigator />
    </SafeAreaView>
  );
}

export default App;