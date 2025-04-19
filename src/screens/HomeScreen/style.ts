import { StyleSheet } from 'react-native';
import { COLORS } from '../../../src/constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  topIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginTop: 20,
  },
  text: {
    fontSize: 20,
    color: COLORS.black,
  },
});

export default styles;
