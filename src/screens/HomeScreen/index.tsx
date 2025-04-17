import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../../src/constants/colors'; // Import the COLORS constant

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Home Screen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  text: {
    fontSize: 20,
    color: COLORS.black,
  },
});

export default HomeScreen;