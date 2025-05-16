import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import { colors } from '../../constants/colors';
import { fonts } from '../../constants/fontss';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>Logo</Text>
      </View>
      
      <View style={styles.imageContainer}>
        <Image 
          source={require('../../../assets/images/welcome-image.jpg')} 
          style={styles.welcomeImage}
          resizeMode="contain"
        />
      </View>
      
      <Text style={styles.title}>Welcome to TMS</Text>
      <Text style={styles.subtitle}>cjdhdfb dhgsd hxv{'\n'}gsgsg shjshgbs hscgc{'\n'}xzbxbh sjhhjhs</Text>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={[styles.button, styles.loginButton]} 
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.loginButtonText}>LOGIN</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.button, styles.signupButton]} 
          onPress={() => navigation.navigate('RoleSelection')}
        >
          <Text style={styles.signupButtonText}>SIGNUP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: "10%",
  },
  logoContainer: {
    marginTop: 40,
    marginBottom: 20,
  },
  logoText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   // maxHeight: 100,
    height: "40%",
    width: "70%",
    marginVertical: 20,
  },
  welcomeImage: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.textColor,
  },
  subtitle: {
    fontSize: 20,
    color: colors.textColor,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 40,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '85%',
    marginBottom: 50,
    borderRadius: 100,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.tertiaryColor,
  },
  button: {
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: "50%",
    borderRadius: 100,
  },

  loginButton: {
    backgroundColor: colors.tertiaryColor,
  },
  signupButton: {
    backgroundColor: 'white',
  },
  loginButtonText: {
    fontWeight: 'bold',
    color: colors.white,
    fontSize: 18,
  },
  signupButtonText: {
    color: colors.textColor,
    fontWeight: 'bold',
    fontSize: 18,
  },
});