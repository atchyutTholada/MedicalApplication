import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import styles from './style';

const LoginScreen = ({navigation}: {navigation: any}) => {
  const handleLogin = () => {
    // Navigate to the Home Screen
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Log In</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.welcomeText}>Welcome</Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do {'\n'}
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
        <Text style={styles.label}>Email or Mobile Number</Text>
        <TextInput
          style={styles.input}
          placeholder="example@example.com"
          placeholderTextColor="#B0BEC5"
        />
        <Text style={styles.label}>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="********"
            placeholderTextColor="#B0BEC5"
            secureTextEntry
          />
          <TouchableOpacity>
            {/* You can manually add the eye icon here */}
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forget Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Log In</Text>
        </TouchableOpacity>
        <Text style={styles.orText}>or sign up with</Text>
        <View style={styles.socialIcons}>
          <TouchableOpacity style={styles.iconCircle}>
            <Text>G</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconCircle}>
            <Text>F</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconCircle}>
            <Text>🔒</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.signUpText}>
          Don’t have an account?{' '}
          <Text
            style={styles.signUpLink}
            onPress={() => navigation.navigate('SignUp')}>
            Sign Up
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
