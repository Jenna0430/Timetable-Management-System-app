import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import { colors } from '../../constants/colors';

export default function RoleSelectionScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>Logo</Text>
      </View>
      
      <View style={styles.roleContainer}>
        <View style={styles.roleItem}>
          <Image 
            source={require('../../../assets/images/student-icon.png')} 
            style={styles.roleImage}
            resizeMode="contain"
          />
          <TouchableOpacity 
            style={styles.roleButton}
            onPress={() => navigation.navigate('Signup', { role: 'student' })}
          >
            <Text style={styles.roleButtonText}>STUDENT</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.roleItem}>
          <Image 
            source={require('../../../assets/images/lecturer-icon.png')} 
            style={styles.roleImage}
            resizeMode="contain"
          />
          <TouchableOpacity 
            style={styles.roleButton}
            onPress={() => navigation.navigate('Signup', { role: 'lecturer' })}
          >
            <Text style={styles.roleButtonText}>LECTURER</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: "30%",
  },
  logoContainer: {
    marginTop: 40,
    marginBottom: 20,
  },
  logoText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  roleContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
  roleItem: {
    alignItems: 'center',
  },
  roleImage: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  roleButton: {
    backgroundColor: colors.tertiaryColor,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  roleButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});