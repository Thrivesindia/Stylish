import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { FontAwesome, Entypo, AntDesign } from '@expo/vector-icons';

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome Back!</Text>

      {/* Username Input */}
      <View style={styles.inputContainer}>
        <FontAwesome name="user" size={20} color="gray" style={styles.icon} />
        <TextInput placeholder="Username or Email" style={styles.input} />
      </View>

      {/* Password Input */}
      <View style={styles.inputContainer}>
        <FontAwesome name="lock" size={20} color="gray" style={styles.icon} />
        <TextInput placeholder="Password" secureTextEntry style={styles.input} />
        <Entypo name="eye" size={20} color="gray" style={styles.eyeIcon} />
      </View>

      {/* Forgot Password */}
      <TouchableOpacity onPress={() => navigation.navigate('Forgotpassword')}>
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      {/* OR Continue With */}
      <Text style={styles.orText}>- OR Continue with -</Text>

      {/* Social Media Buttons */}
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <AntDesign name="google" size={24} color="red" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <AntDesign name="apple1" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <AntDesign name="facebook-square" size={24} color="blue" />
        </TouchableOpacity>
      </View>

      {/* Sign Up Navigation */}
      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.signupText}>
          Create An Account: <Text style={{ color: 'red' }}>Signup</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 10,
    borderRadius: 10,
    width: '100%',
    height: 50,
    marginBottom: 15,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
  },
  eyeIcon: {
    marginLeft: 10,
  },
  forgotText: {
    alignSelf: 'flex-end',
    color: 'red',
    marginBottom: 15,
  },
  loginButton: {
    backgroundColor: 'red',
    paddingVertical: 15,
    width: '100%',
    alignItems: 'center',
    borderRadius: 10,
  },
  loginText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  orText: {
    marginVertical: 20,
    fontSize: 16,
    color: 'gray',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  socialButton: {
    backgroundColor: '#f2f2f2',
    padding: 15,
    borderRadius: 50,
    marginHorizontal: 10,
  },
  signupText: {
    fontSize: 16,
    marginTop: 10,
  },
});
