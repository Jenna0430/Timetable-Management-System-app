import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'

import { colors }  from "../../utils/colors"
import { fonts }  from "../../utils/fonts"

function WelcomeScreen () {
 
    return (
      <View style={styles.mainContainer}>

       

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
    
});