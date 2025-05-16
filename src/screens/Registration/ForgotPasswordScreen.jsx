import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import Ionicons from "react-native-vector-icons/Ionicons";
import { colors } from '../../constants/colors';

export default function ForgotPasswordScreen({ navigation }) {
  const [email, setEmail] = useState('');
  
  const handleSendVerification = () => {
    // Add validation and send verification code logic here
    console.log('Sending verification code to:', email);
    navigation.navigate('Verification', { email });
  };

  return (
    <View style={styles.container}>
      
      <TouchableOpacity style={styles.backButtonWrapper} onPress={() => navigation.goBack()}>
      <Ionicons name={"arrow-back-outline"} color={colors.primary} size={30}/>
      </TouchableOpacity>
      
    <View style={styles.textContainer}>
    <Text style={styles.headingText}>Reset,</Text>
    <Text style={styles.headingText}>Password</Text>
    </View>

    <View style={styles.formContainer}>
    
    <View style={styles.inputContainer}>
    <Ionicons name={"mail-outline"} size={25} color={colors.textColor}/>
     <TextInput style={styles.textInput} placeholder='Enter your email' value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"/>
   </View>

      <TouchableOpacity style={styles.sendButtonWrapper} onPress={handleSendVerification}>
             <Text style={styles.sendText}>SEND</Text>
            </TouchableOpacity> 
     
      
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   // alignItems: 'center',
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
    sendButtonWrapper:{
       backgroundColor: colors.tertiaryColor,
       borderRadius: 100,
       marginVertical: 20,
     },
     sendText: {
       color: colors.white,
       fontSize: 18,
       textAlign: "center",
       padding: 10,
     }, 
});