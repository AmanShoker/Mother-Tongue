
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import { BackHandler } from 'react-native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={headerStyle}
      >
        <Stack.Screen name="Home" component={HomeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const headerStyle = {
  headerTintColor: '#fff',
  headerStyle: {
    backgroundColor: '#333',
    borderBottomWidth: 0, 
    height: 0,
  }, 
  headerTitleStyle: {
    fontSize: 0,
  },
};