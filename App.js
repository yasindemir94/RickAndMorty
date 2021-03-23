import React from 'react'
import { View, Text, StatusBar } from 'react-native'

import Home from './src/views/Home'
import EpisodeDetail from './src/views/EpisodeDetail';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name={'Home'} component={Home} />
          <Stack.Screen name={'EpisodeDetail'} component={EpisodeDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App
