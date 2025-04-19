import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {COLORS} from '../../constants/colors';
import { Iconsvg, Xml } from '../../assets/svgicon';
import SvgLinearGradientButton from '../../components/svgButton';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook

const SetPasswordScreen = () => {
  const navigation = useNavigation(); // Initialize navigation

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const handleNext = () => {
    if (password === confirmPassword) {
      console.log('Password set successfully');
    } else {
      console.log('Passwords do not match');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Iconsvg xml={Xml.Header.back} />
        </TouchableOpacity>
        <Text style={styles.title}>Set Password</Text>
      </View>
      <Text style={styles.subtitle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            secureTextEntry={!passwordVisible}
            value={password}
            onChangeText={setPassword}
            placeholder="Enter password"
          />
          <TouchableOpacity
            onPress={() => setPasswordVisible(!passwordVisible)}>
            <Iconsvg
              width="24"
              height="24"
              viewBox="0 0 32 32"
              fill="none"
              xml={passwordVisible ? Xml.EyeIcon : Xml.EyeIcon}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Confirm Password</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            secureTextEntry={!confirmPasswordVisible}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholder="Confirm password"
          />
          <TouchableOpacity
            onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}>
            <Iconsvg
              width="24"
              height="24"
              viewBox="0 0 32 32"
              fill="none"
              xml={confirmPasswordVisible ? Xml.EyeIcon : Xml.EyeIcon}
            />
          </TouchableOpacity>
        </View>
      </View>

      <SvgLinearGradientButton
          title='Create New Password'
          onPress={handleNext}
          width={300}
          height={60}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row', // Align items horizontally
    alignItems: 'center',
    backgroundColor: COLORS.blue,
    paddingVertical: 15,
    width: '100%',
    paddingHorizontal: 10, // Add padding for spacing
    bottom: 20,
  },
  backButton: {
    marginRight: 10,
    left:20 // Space between back button and title
  },
  container: {
    flex: 1,
    paddingHorizontal: 0, // Remove horizontal padding
    paddingVertical: 20, // Keep only vertical padding
    backgroundColor: COLORS.white,
  },
  title: {
    fontSize: 24,
    fontFamily: 'LeagueSpartan-Bold',
    color: COLORS.white,
    textAlign: 'center',
    flex: 1, // Center the title
  },
  subtitle: {
    fontSize: 12,
    color: '#252525',
    textAlign: 'center',
    marginBottom: 30,
    fontFamily:'LeagueSpartan-Regular',
    lineHeight: 14
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 20,
    color: '#000000',
    verticalAlign:'middle',
    marginBottom: 5,
    fontFamily:'LeagueSpartan-Regular',
    fontWeight:'500',
    lineHeight: 18,
    left:20
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E9F6FE',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginLeft:20,
    marginRight:20,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: COLORS.blue,
  },
  toggle: {
    fontSize: 18,
    color: '#00C6FF',
    marginLeft: 10,
  },
  button: {
    backgroundColor: '#00C6FF',
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default SetPasswordScreen;
