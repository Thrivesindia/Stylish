import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const ForgotPasswordScreen = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = () => {
        console.log('Reset link sent to:', email);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Forgot password?</Text>
            <View style={styles.inputContainer}>
                <MaterialIcons name="email" size={20} color="#666" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Enter your email address"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={setEmail}
                />
            </View>
            <Text style={styles.infoText}>* We will send you a message to set or reset your new password</Text>
            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        width: '100%',
        marginBottom: 10,
        backgroundColor: '#f5f5f5',
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        fontSize: 16,
    },
    infoText: {
        fontSize: 12,
        color: 'gray',
        marginBottom: 20,
        textAlign: 'center',
    },
    submitButton: {
        backgroundColor: '#ff3b5f',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        width: '100%',
        alignItems: 'center',
    },
    submitButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default ForgotPasswordScreen;
