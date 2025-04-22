import React, { useReducer, useState } from "react";
import {
    NativeSyntheticEvent,
    SafeAreaView,
    TextInput,
    TextInputChangeEventData,
    TouchableOpacity,
    View
} from "react-native";
import styles from '../styles/login-style'; // Importe o arquivo de estilos

type Action = {
    type: 'SET_INPUT'; field: string; value: string;
}
    |
{
    type: 'SUBMIT';
}
    |
{
    type: 'SUCCESS';
}
    |
{
    type: 'RESET';
}
const initialState: FormState = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    isLoading: false,
    isSubmitted: false,
    showPassword: false
}

type FormState = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    isLoading: boolean;
    isSubmitted: boolean;
    showPassword: boolean;
}

function formReducer(state: FormState, action: Action) {
    switch (action.type) {
        case 'SET_INPUT':
            return { ...state, [action.field]: action.value };
        case 'SUBMIT':
            return { ...state, loading: true };
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
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder="E-mail"
                placeholderTextColor='#999'
                keyboardType="email-address"
                autoCapitalize="none"
                value={state.email}
                onChange={((event) => handleChange(event, 'email'))}
            >

            </TextInput>
            <TextInput
                style={styles.input}
                placeholder="Nome"
                placeholderTextColor='#999'
                autoCapitalize="none"
                onChange={((event) => handleChange(event, 'name'))}
                value={state.name}
            >

            </TextInput>
            <View style={styles.passwordContainer}>
                <TextInput
                    style={[styles.input, { flex: 1}]}
                    placeholder="Senha"
                    placeholderTextColor='#999'
                    secureTextEntry={true}
                    value={state.password}
                    onChange={((event) => handleChange(event, 'password'))}>
                    
                </TextInput>
            </View>
        </View>
    );
}

export default CreateAccountScreen;