import React from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const WelcomeScreen = ({navigation}) => {
  const handleLogin = () => {
    navigation.navigate('Onboarding'); // Navigate to Onboarding Screen
  };

  const handleSignUp = () => {
    navigation.navigate('Onboarding'); // Navigate to Onboarding Screen
  };

  return (
    <SafeAreaView>
      <View style={{alignItems: 'center'}}>
        <Image
          source={require('../../assets/images/HomePlus.png')}
          style={styles.logo}
        />
        <Image
          source={require('../../assets/images/HealthTrack.png')}
          style={styles.healthTrack}
        />
      </View>
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,{'\n'} sed do
        eiusmod tempor incididunt ut labore et dolore{'\n'} magna aliqua.
      </Text>
      <View style={{alignItems: 'center', marginTop: 100}}>
        <TouchableOpacity style={styles.buttonPrimary} onPress={handleLogin}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonSecondary} onPress={handleSignUp}>
          <Text style={styles.buttonTextSecondary}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 80,
    top: 20,
  },
  logo: {
    marginTop: 100,
    width: 150,
    height: 150,
  },
  healthTrack: {
    width: 150,
    height: 150,
    marginTop: -20,
    resizeMode: 'contain',
  },
  description: {
    textAlign: 'center',
    fontSize: 10,
    color: 'black',
    marginTop: 40,
  },
  buttonPrimary: {
    backgroundColor: '#33E4DB',
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginBottom: 15,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonSecondary: {
    backgroundColor: '#E9F6FE',
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 25,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonTextSecondary: {
    color: '#13CAD6',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default WelcomeScreen;
