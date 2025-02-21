import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import AddDataScreen from './screens/AddDataScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: '🏠 Home' }} 
        />
        <Stack.Screen 
          name="AddData" 
          component={AddDataScreen} 
          options={{ title: '➕ Aggiungi Dato' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}