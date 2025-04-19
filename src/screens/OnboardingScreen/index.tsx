import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {COLORS} from '../../constants/colors';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {LinearGradient, Stop} from 'react-native-svg';
import SvgLinearGradientButton from '../../components/svgButton';

type RootStackParamList = {
  Onboarding: undefined;
  Home: undefined;
  RegistrationScreen: undefined;
  Login: undefined;
};

type OnboardingScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Onboarding'
>;

interface OnboardingScreenProps {
  navigation: OnboardingScreenNavigationProp;
}

const {width, height} = Dimensions.get('window');

const slides = [
  {
    id: '1',
    title: 'Choose Your Doctor',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing \n elit, sed do eiusmod tempor incididunt ut \n labore et dolore magna aliqua.',
    image: require('../../assets/images/FirstSlideImage.png'), // Ensure this file exists
  },
  {
    id: '2',
    title: 'Schedule Your Appointments',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing \n elit, sed do eiusmod tempor incididunt ut \n labore et dolore magna aliqua.',
    image: require('../../assets/images/SecondSlideImage.png'), // Ensure this file exists
  },
  {
    id: '3',
    title: 'Check Your Medical History',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing \n elit, sed do eiusmod tempor incididunt ut \n labore et dolore magna aliqua.',
    image: require('../../assets/images/ThirdSlideImage.png'), // Ensure this file exists
  },
];

const OnboardingScreen: React.FC<OnboardingScreenProps> = ({navigation}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      flatListRef.current?.scrollToIndex({index: currentIndex + 1});
    } else {
      handleDone();
    }
  };

  const handleDone = () => {
    navigation.replace('Login'); // Navigate to Home Screen after Onboarding
  };

  const renderItem = ({item}: {item: (typeof slides)[0]}) => (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subtitle}>{item.subtitle}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Skip button */}
      <TouchableOpacity style={styles.skipButton} onPress={handleDone}>
        <Text style={styles.skipButtonText}>Skip{'>'}</Text>
      </TouchableOpacity>

      <FlatList
        data={slides}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={e => {
          const index = Math.round(e.nativeEvent.contentOffset.x / width);
          setCurrentIndex(index);
        }}
        ref={flatListRef}
      />
      <View style={styles.footer}>
        <View style={styles.pagination}>
          {slides.map((_, index) => (
            <View
              key={index}
              style={[styles.dot, currentIndex === index && styles.activeDot]}
            />
          ))}
        </View>
        <SvgLinearGradientButton
          title={currentIndex === slides.length - 1 ? 'Get Started' : 'Next'}
          onPress={handleNext}
          width={300}
          height={60}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: 40, // Move content up
  },
  skipButton: {
    position: 'absolute',
    top: 10,
    right: 20,
    zIndex: 1,
  },
  skipButtonText: {
    fontSize: 16,
    color: COLORS.primary,
    fontWeight: 'bold',
  },
  slide: {
    width,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 450,
    height: 450,
    resizeMode: 'contain',
    bottom: 200,
  },
  title: {
    fontSize: 24,
    color: COLORS.blue,
    textAlign: 'center',
    bottom: 200,
    fontFamily: 'LeagueSpartan-Bold',
  },
  subtitle: {
    fontSize: 11,
    color: COLORS.gray,
    bottom: 150,
    textAlign: 'center',
  },
  footer: {
    position: 'absolute',
    bottom: 80,
    marginVertical: 20,
    width,
    alignItems: 'center',
  },
  pagination: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: COLORS.gray,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: COLORS.blue,
  },
  button: {
    backgroundColor: COLORS.blue,
    paddingVertical: 10,
    paddingHorizontal: 60,
    borderRadius: 20,
    top: 30,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default OnboardingScreen;
