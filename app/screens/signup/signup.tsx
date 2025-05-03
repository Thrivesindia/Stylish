import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome, Entypo, AntDesign } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import LoginScreen from '../login/login';

type SignupScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Signup'>;
};

const SignupScreen: React.FC<SignupScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Create an account</Text>

      {/* Username or Email Input */}
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

      {/* Confirm Password Input */}
      <View style={styles.inputContainer}>
        <FontAwesome name="lock" size={20} color="gray" style={styles.icon} />
        <TextInput placeholder="Confirm Password" secureTextEntry style={styles.input} />
        <Entypo name="eye" size={20} color="gray" style={styles.eyeIcon} />
      </View>

      {/* Terms and Conditions */}
      <Text style={styles.termsText}>
        By clicking the <Text style={{ color: 'red' }}>Register</Text> button, you agree to the public offer.
      </Text>

      {/* Sign Up Button */}
      <TouchableOpacity style={styles.signupButton}onPress={() => navigation.navigate('Signin')}>
        <Text style={styles.signupText}>Create Account</Text>
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

      {/* Already Have an Account - Login */}
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={styles.loginText}>
          I Already Have an Account <Text style={{ color: 'red' }}>Login</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  headerText: {
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
  termsText: {
    textAlign: 'center',
    fontSize: 14,
    marginBottom: 20,
    color: 'gray',
  },
  signupButton: {
    backgroundColor: 'red',
    paddingVertical: 15,
    width: '100%',
    alignItems: 'center',
    borderRadius: 10,
  },
  signupText: {
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
  loginText: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default SignupScreen;