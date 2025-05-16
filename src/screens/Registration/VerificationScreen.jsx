import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function VerificationScreen({ route, navigation }) {
  const { email } = route.params || {};
  const [verificationCode, setVerificationCode] = useState('');
  
  const handleVerify = () => {
    // Add verification code validation logic here
    console.log('Verifying code:', verificationCode, 'for email:', email);
    navigation.navigate('ResetPassword', { email, code: verificationCode });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reset Password</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Verification code"
        value={verificationCode}
        onChangeText={setVerificationCode}
        keyboardType="numeric"
      />
      
      <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
        <Text style={styles.verifyButtonText}>VERIFY</Text>
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
    marginBottom: 40,
    paddingHorizontal: 20,
  },
  verifyButton: {
    width: '100%',
    backgroundColor: '#6A94CE',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
  },
  verifyButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});