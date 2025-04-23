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
    paddingHorizontal: 10,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  logoImage: {
    width: 24, // Ajuste o tamanho conforme necessário
    height: 24,
    marginRight: 8, // Espaço entre a imagem e o texto
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
    paddingHorizontal: 20,
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
    position: 'relative', // Permite posicionamento absoluto do botão
    // backgroundColor: '#F5F5F5',
    height: 50,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  showPasswordButton: {
    position: 'absolute', // Posiciona o botão dentro do campo
    right: 1, // Distância da borda direita
    top: '50%', // Centraliza verticalmente
    transform: [{ translateY: -20 }], // Ajusta para centralizar
  },
  showPasswordText: {
    fontSize: 14,
    color: '#333',
    marginEnd: 15,
    marginTop: 1,
  },
  forgotPasswordButton: {
    alignSelf: 'flex-end',
    paddingHorizontal: 20,
    
    
  },
  forgotPasswordText: {
    color: '#0095f6',
    fontSize: 14,
    textDecorationLine: 'underline',
    marginRight: 10,
  },
  loginButton: {
    marginTop: 32,
    marginHorizontal: 20,
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