import { StyleSheet } from "react-native";

const loginSignupStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  appTitle: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 22,
    color: '#333',
    marginTop: 15,
  },
  formContainer: {
    paddingHorizontal: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 15,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
    fontFamily: 'OpenSans-Regular',
    color: '#333',
  },
  forgotPasswordContainer: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  forgotPasswordText: {
    fontFamily: 'OpenSans-Regular',
    color: '#666',
  },
  loginButton: {
    backgroundColor: '#ffd700',
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupButton: {
    backgroundColor: '#ffd700',
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    fontFamily: 'OpenSans-Semibold',
    color: '#fff',
    fontSize: 16,
  },
  signupButtonText: {
    fontFamily: 'OpenSans-Semibold',
    color: '#fff',
    fontSize: 16,
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  signupText: {
    fontFamily: 'OpenSans-Regular',
    color: '#666',
  },
  loginText: {
    fontFamily: 'OpenSans-Regular',
    color: '#666',
  },
  signupLinkText: {
    fontFamily: 'OpenSans-Semibold',
    color: '#ffd700',
  },
  loginLinkText: {
    fontFamily: 'OpenSans-Semibold',
    color: '#ffd700',
  }
});

export default loginSignupStyles;