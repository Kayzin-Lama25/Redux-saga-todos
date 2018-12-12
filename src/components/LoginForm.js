import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';

import Card from './common/Card';
import CardSection from './common/CardSection';
import Input from './common/Input';
import Button from './common/Button';
import Spinner from './common/Spinner';
import { changeText, loginUser } from '../action';

class LoginForm extends Component {

    renderSpinner(loading) {
        console.log("LOADING >>> " + loading);
        if (loading) {
            return (
                <Spinner size='small' />
            );
        }
    }

    render() {

        const { email, password, error, loading } = this.props;

        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="email@gmail.com"
                        value={email}
                        onChangeText={text => this.props.changeText({ prop: 'email', value: text })}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        label="Password"
                        placeholder="password"
                        value={password}
                        onChangeText={text => this.props.changeText({ prop: 'password', value: text })}
                    />
                </CardSection>

                {/* <CardSection>
                    {this.renderSpinner(loading)};
                </CardSection> */}

                <Text style={styles.errorTextStyle}>{error}</Text>

                <CardSection>
                    <Button text="Login" onPress={() => this.props.loginUser({ email, password })} />
                </CardSection>

            </Card >
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

const mapStateToProps = (state) => {
    //console.log(state.changedText);
    const { email, password, error, loading } = state.authReducer;
    return { email, password, error, loading };
}

export default connect(mapStateToProps, { changeText, loginUser })(LoginForm);

//export default LoginForm;