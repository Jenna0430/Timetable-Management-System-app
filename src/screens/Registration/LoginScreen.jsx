import React, { Component, useState } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons";
import SimpleLineIcons from "react-native-vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native';
import { colors }  from "../../utils/colors"
import { fonts }  from "../../utils/fonts"

function LoginScreen () {

  const navigation = useNavigation();
  const [secureEntry, setSecureEntry] = useState(true);

  const handleGoBack = () => {
    navigation.goBack();
  }
 
    return (
      <View style={styles.mainContainer}>
        <TouchableOpacity style={styles.backButtonWrapper} onPress={handleGoBack}>
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
        <TextInput style={styles.textInput} placeholder='Enter your matricule' placeholderTextColor={colors.textColor} keyboardType='email-address'/>
       </View>

       <View style={styles.inputContainer}>
          <SimpleLineIcons name={"lock"} size={25} color={colors.textColor}/>
        <TextInput style={styles.textInput} placeholder='Enter your password' placeholderTextColor={colors.textColor} secureTextEntry={secureEntry}/>

       <TouchableOpacity onPress={() => {setSecureEntry((prev) => !prev);
       }}>
       <SimpleLineIcons name={"eye"} size={25} color={colors.textColor}/>
       </TouchableOpacity>
       </View>

       <TouchableOpacity>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
       </TouchableOpacity>

       <TouchableOpacity style={styles.loginButtonWrapper}>
        <Text style={styles.loginText}>Login</Text>
       </TouchableOpacity>

       <View style={styles.footerContainer}>
        <Text style={styles.accountText}>Don't have an account?</Text>
        <Text style={styles.signupText}>Sign up</Text>
       </View>

       </View>
      </View>
    )
  }


export default LoginScreen

const styles = StyleSheet.create({
    mainContainer: {
      flex: 1, //occupies the entire height and width of the parent container
      backgroundColor: colors.white,
      padding: "10%",
      // alignItems: "center",
    },
    backButtonWrapper: {
      height: 50,
      width: 50,
      backgroundColor: colors.textColor,
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
      fontFamily: fonts.SemiBold,
    },
    formContainer: {
      marginTop: 20,
    },
    inputContainer: {
      borderWidth: 1,
      borderColor: colors.textColor,
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
      fontFamily: fonts.Light,

    },
    forgotPasswordText: {
      textAlign: "right",
      color: colors.primaryColor,
      fontFamily: fonts.SemiBold,
      marginVertical: 10,
    },
    loginButtonWrapper:{
      backgroundColor: colors.primaryColor,
      borderRadius: 100,
      marginVertical: 20,
    },
    loginText: {
      color: colors.white,
      fontSize: 18,
      fontFamily: fonts.Bold,
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
      fontFamily: fonts.Regular,

    },
    signupText: {
      color: colors.textColor,
      fontFamily: fonts.Bold,
    }
});