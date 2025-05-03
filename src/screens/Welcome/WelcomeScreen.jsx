import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'

import { colors }  from "../../utils/colors"
import { fonts }  from "../../utils/fonts"
import { useNavigation } from '@react-navigation/native'

function WelcomeScreen () {

  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate("LOGIN");
  };

    return (
      <View style={styles.mainContainer}>

        <View style={styles.logo}>
          <Text style={styles.titletext}>Logo Here</Text>
        </View>

        <Image source={require("../../assets/Images/welcomescreen.jpg")} style={styles.welcomeImage}/>

        <Text style={styles.title}>Lorem ipsum dolor</Text>
        <Text style={style.subTitle}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat 
        </Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.buttonWrapper, {backgroundColor: colors.primaryColor}]}
          onPress={handleLogin}>
            <Text styles={loginButtonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonWrapper}>
            <Text style={signupButtonText}>Sign-up</Text>
          </TouchableOpacity>
        </View>

      </View>
    )
  }


export default WelcomeScreen

const styles = StyleSheet.create({
    mainContainer: {
      flex: 1, //occupies the entire height and width of the parent container
      backgroundColor: colors.white,
      padding: "10%",
      alignItems: "center",
    },
    logo: {
      height: 40,
      width: 140,
      margin: 40,
    },
    welcomeImage: {
      height: "30%",
      width: "75%",
      marginVertical: 20,
    },
    title: {
      fontSize: 30,
      color: colors.textColor,
      fontFamily: fonts.Bold,

    },
    titletext: {
      fontSize: 30,
      color: colors.textColor,
      fontFamily: fonts.Regular,
      paddingHorizontal: 20,
      textAlign: "center",
      marginTop: 40,

    },
    subTitle: {
      fontSize: 20,
      textAlign: "center",
      color: colors.textColor,
      fontFamily: fonts.Regular,
      marginVertical: 20,
    },
    buttonContainer: {
      flexDirection: "row",
      marginTop: 20,
      borderWidth: 1,
      borderColor: colors.primaryColor,
      width: "80%",
      height: 60,
      borderRadius: 100,
    },
    buttonWrapper: {
      justifyContent: "center",
      alignItems: "center",
      width: "50%",
      borderRadius: 98,
    },
    loginButtonText: {
      color: colors.textColor,
      fontSize: 18,
      fontFamily: fonts.SemiBold,
    },
    signupButtonText: {
      fontSize: 18,
      fontFamily: fonts.SemiBold,
    }
});