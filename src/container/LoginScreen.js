import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import LoginForm from '../components/LoginForm';

class LoginScreen extends Component {

    render() {
        return (
            <View>
                <LoginForm />
            </View>
        );
    }
}

export default LoginScreen;