// SvgLinearGradientButton.tsx
import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import Svg, {Rect, Defs, LinearGradient, Stop} from 'react-native-svg';

const SvgLinearGradientButton = ({
  title,
  onPress,
  width = 250,
  height = 60,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={{
        marginLeft: 20,
        marginTop: 20,
        marginBottom: 20,
        width: width,
        height: height,
        backgroundColor: '#33E4DB',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={{width, height}}>
        <Svg width="100%" height="100%">
          <Defs>
            <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
              <Stop offset="0" stopColor="#33E4DB" stopOpacity="1" />
              <Stop offset="1" stopColor="#00BBD3" stopOpacity="1" />
            </LinearGradient>
          </Defs>
          <Rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            rx="30"
            ry="30"
            fill="url(#grad)"
          />
        </Svg>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default SvgLinearGradientButton;
