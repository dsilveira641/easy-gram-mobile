import React, { useReducer } from "react";
import {
  NativeSyntheticEvent,
  SafeAreaView,
  Text,
  TextInput,
  TextInputChangeEventData,
  TouchableOpacity,
  View,
  StyleSheet
} from "react-native";

type Action =
  | { type: 'SET_INPUT'; field: string; value: string }
  | { type: 'SUBMIT' }
  | { type: 'SUCCESS' }
  | { type: 'RESET' };

const initialState: FormState = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  isLoading: false,
  isSubmitted: false,
  showPassword: false
};

type FormState = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  isLoading: boolean;
  isSubmitted: boolean;
  showPassword: boolean;
};

function formReducer(state: FormState, action: Action) {
  switch (action.type) {
    case 'SET_INPUT':
      return { ...state, [action.field]: action.value };
    case 'SUBMIT':
      return { ...state, isLoading: true };
    case 'SUCCESS':
      return { ...state, isSubmitted: true, isLoading: false };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

const CreateAccountScreen: React.FC = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleChange = (event: NativeSyntheticEvent<TextInputChangeEventData>, fieldName: string) => {
    dispatch({
      type: 'SET_INPUT',
      field: fieldName,
      value: event.nativeEvent.text
    });
  };

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.title}>Criar Conta</Text>

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#999"
        keyboardType="email-address"
        autoCapitalize="none"
        value={state.email}
        onChange={(event) => handleChange(event, 'email')}
      />
      <TextInput
        style={styles.input}
        placeholder="Nome"
        placeholderTextColor="#999"
        autoCapitalize="none"
        value={state.name}
        onChange={(event) => handleChange(event, 'name')}
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={[styles.input, { flex: 1 }]}
          placeholder="Senha"
          placeholderTextColor="#999"
          secureTextEntry
          value={state.password}
          onChange={(event) => handleChange(event, 'password')}
        />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Criar Conta</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateAccountScreen;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 50,
    textAlign: 'center',
  },
  input: {
    height: 48,
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    marginBottom: 16,
    color: '#333',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 16,
    height: 48,
  },
  button: {
    backgroundColor: '#00C897',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonDisabled: {
    backgroundColor: '#00a67d',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  }
});
