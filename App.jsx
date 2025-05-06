import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import WelcomeScreen from "./src/screens/welcome/WelcomeScreen";
import LoginScreen from "./src/screens/Registration/LoginScreen";
import SignUpScreen from "./src/screens/Registration/SignupScreen";

const Stack = createNativeStackNavigator();

export default function App()  {

    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name={"WELCOME"} component={WelcomeScreen}/>
          <Stack.Screen name={"LOGIN"} component={LoginScreen}/>
          <Stack.Screen name={"SIGNUP"} component={SignUpScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }




