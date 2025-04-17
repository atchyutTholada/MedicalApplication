import {StyleSheet, Dimensions} from 'react-native';
import { COLORS } from '../../constants/colors';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    backgroundColor: '#33E4DB',
    paddingVertical: 20,
    alignItems: 'center',
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#13CAD6',
    textAlign: 'center',
    right: 100,
  },
  description: {
    fontSize: 11,
    color: '#252525',
    textAlign: 'center',
    marginVertical: 10,
    opacity: 0.8,
    fontWeight: '300',
    lineHeight: 15,
  },
  label: {
    fontSize: 14,
    color: '#607D8B',
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#B0BEC5',
    borderRadius: 8,
    padding: 10,
    marginTop: 5,
    color: '#000000',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#B0BEC5',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  passwordInput: {
    flex: 1, // Ensure the input takes up all available space
    paddingVertical: 10, // Adjust padding for better alignment
    color: '#000', // Ensure text is visible
  },
  showPassword: {
    color: '#607D8B',
    marginLeft: 10,
  },
  forgotPassword: {
    color: '#33E4DB',
    textAlign: 'right',
    marginTop: 10,
  },
  loginButton: {
    width: '60%', // Decrease the width of the button
    alignSelf: 'center',
    backgroundColor: COLORS.blue,
    paddingVertical: 12,
    borderRadius: 20,
    marginTop: 20,
    alignItems: 'center',
  },
  loginButtonText: {
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
  signUpText: {
    textAlign: 'center',
    color: '#607D8B',
  },
  signUpLink: {
    color: '#33E4DB',
    fontWeight: 'bold',
  },
});

export default styles;
