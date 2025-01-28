
import React from 'react';
import FirstScreen from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { PaperProvider } from 'react-native-paper';



export default function App() {
  const Stack = createNativeStackNavigator()

  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="First">
          <Stack.Screen
            name="First"
            component={FirstScreen}
            options={{ title: 'MD Nav Demo' }} />
          <Stack.Screen
            name="Second"
            component={SecondScreen}
            options={{ title: 'MD Nav Demo' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

