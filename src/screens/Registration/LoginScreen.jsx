import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import Ionicons from "react-native-vector-icons/Ionicons";
import SimpleLineIcons from "react-native-vector-icons/Ionicons";
import { colors } from '../../constants/colors';

export default function LoginScreen({ navigation }) {
  const [matriculation, setMatriculation] = useState('');
  const [password, setPassword] = useState('');
  const [secureEntry, setSecureEntry] = useState(true);
  
  const handleLogin = () => {
    // Add validation and login logic here
    console.log('Logging in with:', { matriculation, password });
    // Navigate to the main app screen after login
  };

  return (
    <View style={styles.container}>

       <TouchableOpacity style={styles.backButtonWrapper} onPress={() => navigation.goBack()}>
          <Ionicons name={"arrow-back-outline"} color={colors.primary} size={30}/>
        </TouchableOpacity>

       <View style={styles.textContainer}>
        <Text style={styles.headingText}>Hey,</Text>
        <Text style={styles.headingText}>Welcome</Text>
        <Text style={styles.headingText}>Back</Text>
       </View>

        <View style={styles.formContainer}>

        <View style={styles.inputContainer}>
          <Ionicons name={"mail-outline"} size={25} color={colors.textColor}/>
        <TextInput style={styles.textInput} placeholder='Enter your matricule' value={matriculation}
        onChangeText={setMatriculation}/>
       </View>

       <View style={styles.inputContainer}>
          <SimpleLineIcons name={"lock"} size={25} color={colors.textColor}/>
        <TextInput style={styles.textInput} placeholder='Enter your password'  value={password}
        onChangeText={setPassword} secureTextEntry={secureEntry}/>

       <TouchableOpacity onPress={() => {setSecureEntry((prev) => !prev);
       }}>
       <SimpleLineIcons name={"eye"} size={25} color={colors.textColor}/>
       </TouchableOpacity>
       </View>
      
      
      <TouchableOpacity 
        style={styles.forgotPassword}
        onPress={() => navigation.navigate('ForgotPassword')}
      >
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>
      
        <TouchableOpacity style={styles.loginButtonWrapper} onPress={handleLogin}>
        <Text style={styles.loginText}>Login</Text>
       </TouchableOpacity>

       <View style={styles.footerContainer}>
        <Text style={styles.accountText}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.signupText}>Sign up</Text>
        </TouchableOpacity>

       </View>

       </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  //  alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: 100,
  },
   backButtonWrapper: {
      height: 50,
      width: 50,
      backgroundColor: colors.tertiaryColor,
      borderRadius: 25,
      justifyContent: "center",
      alignItems: "center",
    },
    textContainer: {
      marginVertical: 20,
    },
    headingText: {
      fontSize: 32,
      color: colors.textColor,
    },
   formContainer: {
      marginTop: 20,
    },
    inputContainer: {
      borderWidth: 1,
      borderColor: colors.tertiaryColor,
      borderRadius: 100,
      paddingHorizontal: 20,
      flexDirection: "row",
      alignItems: "center",
      padding: 5,
      marginVertical: 20,
    },
    textInput: {
      flex: 1,
      paddingHorizontal: 10,
    },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 40,
  },
  forgotPasswordText: {
      color: colors.tertiaryColor,
      marginVertical: 10,
    },

  loginButtonWrapper:{
      backgroundColor: colors.tertiaryColor,
      borderRadius: 100,
      marginVertical: 20,
    },
    loginText: {
      color: colors.white,
      fontSize: 18,
      textAlign: "center",
      padding: 10,
    },
    footerContainer:{
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      marginVertical: 20,
      gap: 2,
    },
    accountText: {
      color: colors.textColor,
    },
    signupText: {
      color: colors.tertiaryColor,
    }
});