import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

const SignUpScreen = ({navigation}: {navigation: any}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}}>
        <View style={styles.header}>
          <Text style={styles.headerText}>New Account</Text>
        </View>
        <View style={styles.form}>
          <Text style={styles.label}>Full name</Text>
          <TextInput
            style={styles.input}
            placeholder="example@example.com"
            placeholderTextColor="#B0BEC5"
          />
          <Text style={styles.label}>Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={{flex: 1}} // Adjusted to fill the container
              placeholder="********"
              placeholderTextColor="#B0BEC5"
              secureTextEntry
            />
            <TouchableOpacity>
              {/* Add eye icon manually */}
            </TouchableOpacity>
          </View>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="example@example.com"
            placeholderTextColor="#B0BEC5"
          />
          <Text style={styles.label}>Mobile Number</Text>
          <TextInput
            style={styles.input}
            placeholder="example@example.com"
            placeholderTextColor="#B0BEC5"
          />
          <Text style={styles.label}>Date Of Birth</Text>
          <TextInput
            style={styles.input}
            placeholder="DD / MM / YYYY"
            placeholderTextColor="#B0BEC5"
          />
          <Text style={styles.terms}>
            By continuing, you agree to{' '}
            <Text style={styles.link}>Terms of Use</Text> and{' '}
            <Text style={styles.link}>Privacy Policy</Text>.
          </Text>
          <TouchableOpacity style={styles.signUpButton}>
            <Text style={styles.signUpButtonText}>Sign Up</Text>
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
          <Text style={styles.footerText}>
            already have an account?{' '}
            <Text
              style={styles.loginLink}
              onPress={() => navigation.navigate('Login')}>
              Log in
            </Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 0, // Remove horizontal padding from the container
  },
  header: {
    backgroundColor: '#33E4DB', // Blue background
    paddingVertical: 13,
    alignItems: 'center',
    width: '100%', // Ensure 100% width
    marginHorizontal: 0, // Explicitly remove horizontal margins
    paddingHorizontal: 0, // Explicitly remove horizontal paddings
  },
  headerText: {
    color: '#FFFFFF', // White text
    fontSize: 20,
    fontWeight: 'bold',
  },
  form: {
    flex: 1,
  },
  label: {
    fontSize: 14,
    color: '#607D8B',
    marginTop: 15, // Reduced vertical spacing
    marginHorizontal: 20, // Align labels with text fields
  },
  input: {
    borderWidth: 1,
    borderColor: '#B0BEC5',
    borderRadius: 8,
    padding: 10,
    marginTop: 8, // Reduced vertical spacing
    marginHorizontal: 20, // Consistent left and right margins
    color: '#000000',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#B0BEC5',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginTop: 8, // Reduced vertical spacing
    marginHorizontal: 20, // Consistent left and right margins
  },
  terms: {
    fontSize: 11,
    color: '#607D8B',
    textAlign: 'center',
    marginVertical: 10,
  },
  link: {
    color: '#33E4DB',
    fontWeight: 'bold',
  },
  signUpButton: {
    backgroundColor: '#33E4DB',
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
    width: '70%', // Decreased width
    alignSelf: 'center', // Center the button
  },
  signUpButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orText: {
    textAlign: 'center',
    color: '#607D8B',
    marginVertical: 20,
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  iconCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#E0F7FA',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  footerText: {
    textAlign: 'center',
    color: '#607D8B',
  },
  loginLink: {
    color: '#33E4DB',
    fontWeight: 'bold',
  },
});

export default SignUpScreen;
