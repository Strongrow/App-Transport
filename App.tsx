import React from 'react'
/* import 'react-native-gesture-handler'; */
import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './src/navigator/Navigator';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}

export default App;
