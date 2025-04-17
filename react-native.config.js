module.exports = {
  dependencies: {
    '@react-native-async-storage/async-storage': {
      platforms: {
        android: {
          sourceDir: './node_modules/@react-native-async-storage/async-storage/android',
        },
      },
    },
    'react-native-gesture-handler': {
      platforms: {
        android: {
          sourceDir: './node_modules/react-native-gesture-handler/android',
        },
      },
    },
  },
};
