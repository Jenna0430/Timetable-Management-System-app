import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function ResetPasswordScreen({ route, navigation }) {
  const { email, code } = route.params || {};
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const handleResetPassword = () => {
    // Add password validation logic here
    if (newPassword !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }
    
    // Add reset password API call here
    console.log('Resetting password for email:', email, 'with code:', code);
    
    // Show success message and navigate to login
    Alert.alert(
      'Success', 
      'Your password has been reset successfully',
      [{ text: 'OK', onPress: () => navigation.navigate('Login') }]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>New Password</Text>
      
      <TextInput
        style={styles.input}
        placeholder="New password"
        secureTextEntry
        value={newPassword}
        onChangeText={setNewPassword}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Confirm password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      
      <TouchableOpacity style={styles.resetButton} onPress={handleResetPassword}>
        <Text style={styles.resetButtonText}>RESET PASSWORD</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: 100,
  },
  title: {
    fontSize: 28,
    color: '#505050',
    marginBottom: 60,
    fontWeight: '500',
    alignSelf: 'flex-start',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#6A94CE',
    borderRadius: 25,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  resetButton: {
    width: '100%',
    backgroundColor: '#6A94CE',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
  },
  resetButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});