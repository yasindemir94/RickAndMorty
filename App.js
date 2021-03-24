import React from 'react'
import { View, Text, StatusBar } from 'react-native'

import Home from './src/views/Home'
import EpisodeDetail from './src/views/EpisodeDetail';
import Characters from './src/views/Characters';
import CharacterDetail from './src/views/CharacterDetail';

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
          <Stack.Screen name={'Characters'} component={Characters} />
          <Stack.Screen name={'CharacterDetail'} component={CharacterDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App
