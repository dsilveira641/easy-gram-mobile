import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingTop: 48,
  },
  menuButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
  },
  menuButtonText: {
    fontSize: 24,
    color: '#333',
  },
  logo: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
    alignSelf: 'center',
    marginBottom: 16,
  },
  loginTitle: {
    fontSize: 20,
    fontWeight: '500',
    marginTop: 70,
    color: '#333',
    marginLeft: 30,
  },
  instruction: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginTop: 10,
    marginVertical: 8,
    paddingHorizontal: 16,
  },
  inputContainer: {
    marginTop: 24,
  },
  input: {
    backgroundColor: '#F5F5F5',
    height: 48,
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 14,
    marginBottom: 16,
    color: '#333',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  showPasswordButton: {
    marginLeft: 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    marginTop: -20,
  },
  showPasswordText: {
    fontSize: 16,
  },
  forgotPasswordButton: {
    alignSelf: 'flex-end',
  },
  forgotPasswordText: {
    color: '#0095f6',
    fontSize: 14,
    textDecorationLine: 'underline',
    marginRight: 10,
  },
  loginButton: {
    marginTop: 32,
    backgroundColor: '#0D7875',
    height: 48,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default styles;