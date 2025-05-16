import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import WelcomeScreen from "./src/screens/Welcome/WelcomeScreen";
import RoleSelectionScreen from './src/screens/Registration/RoleSelectionScreen';
import SignupScreen from './src/screens/Registration/SignupScreen';
import ForgotPasswordScreen from './src/screens/Registration/ForgotPasswordScreen';
import ResetPasswordScreen from './src/screens/Registration/ResetPasswordScreen';
import VerificationScreen from './src/screens/Registration/VerificationScreen';
import LoginScreen from './src/screens/Registration/LoginScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="RoleSelection" component={RoleSelectionScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="Verification" component={VerificationScreen} />
        <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}