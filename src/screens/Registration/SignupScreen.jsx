import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import SimpleLineIcons from "react-native-vector-icons/Ionicons";

import { colors } from '../../constants/colors';

export default function SignupScreen({ route, navigation }) {
  const [fullName, setFullName] = useState('');
  const [matriculation, setMatriculation] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [secureEntry, setSecureEntry] = useState(true);
  
  const handleSignup = () => {
    // Add validation and signup logic here
    console.log('Signing up with:', { fullName, matriculation, password });
    // Navigate to the next screen after signup
  };

  return (
    <View style={styles.container}>


      <TouchableOpacity style={styles.backButtonWrapper} onPress={() => navigation.goBack()}>
          <Ionicons name={"arrow-back-outline"} color={colors.textColor} size={30}/>
        </TouchableOpacity>

       <View style={styles.textContainer}>
        <Text style={styles.headingText}>Let's get,</Text>
        <Text style={styles.headingText}>started</Text>
        </View>

        <View style={styles.formContainer}>

        <View style={styles.inputContainer}>
          <Ionicons name={"mail-outline"} size={25} color={colors.textColor}/>
        <TextInput style={styles.textInput} placeholder='Enter your name'  value={fullName} onChangeText={setFullName}/>
       </View>

       <View style={styles.inputContainer}>
          <SimpleLineIcons name={"screen-smartphone"} size={25} color={colors.textColor}/>
        <TextInput style={styles.textInput} placeholder="Matriculation N" value={matriculation}
        onChangeText={setMatriculation}/>
       </View>


        <View style={styles.inputContainer}>
          <SimpleLineIcons name={"lock"} size={25} color={colors.textColor}/>
        <TextInput style={styles.textInput} placeholder='Enter your password' value={password}
        onChangeText={setPassword} secureTextEntry={secureEntry}/>

       <TouchableOpacity onPress={() => {setSecureEntry((prev) => !prev);
       }}>
       <SimpleLineIcons name={"eye"} size={25} color={colors.textColor}/>
       </TouchableOpacity>
       </View>

       <View style={styles.inputContainer}>
          <SimpleLineIcons name={"lock"} size={25} color={colors.textColor}/>
        <TextInput style={styles.textInput} placeholder='Confirm password' value={confirmPassword}
        onChangeText={setConfirmPassword} secureTextEntry={secureEntry}/>

       <TouchableOpacity onPress={() => {setSecureEntry((prev) => !prev);
       }}>
       <SimpleLineIcons name={"eye"} size={25} color={colors.textColor}/>
       </TouchableOpacity>
       </View>

       <TouchableOpacity style={styles.signupButtonWrapper}>
        <Text style={styles.signupText}>Sign Up</Text>
       </TouchableOpacity>

       <View style={styles.footerContainer}>
        <Text style={styles.accountText}>Already have an account?</Text>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginText}>Login</Text>
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
    paddingHorizontal: "5%",
    paddingTop: "25%",
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
   signupButtonWrapper:{
      backgroundColor: colors.tertiaryColor,
      borderRadius: 100,
      marginVertical: 20,
    },
    signupText: {
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
    loginText: {
      color: colors.tertiaryColor,
    }
});
