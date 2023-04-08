import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreens } from '../screens/LoginScreens';
import { RegisterScreen } from '../screens/RegisterScreen';
import { ProtectedScreen } from '../screens/ProtectedScreen';
import { PreloadScreen } from '../screens/PreloadScreen';
import { MenuScreens } from '../screens/MenuScreens';
import { ChatScreens } from '../screens/ChatScreens';
import { PositionScreen } from '../screens/PositionScreen';

const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
      cardStyle: {
        backgroundColor: 'black'
      }
    }}>
      <Stack.Screen name="LoginScreens" component={LoginScreens} />
      <Stack.Screen name="PreloadScreen" component={PreloadScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="ProtectedScreen" component={ProtectedScreen} />
      <Stack.Screen name="MenuScreens" component={MenuScreens} />
      <Stack.Screen name="ChatScreens" component={ChatScreens} />
      <Stack.Screen name="PositionScreen" component={PositionScreen} />
    </Stack.Navigator>
  );
}