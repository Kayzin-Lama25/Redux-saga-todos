import React, { Component } from 'react';
import { View, Text } from 'react-native';

import UpdateStudentForm from '../components/UpdateStudentForm';

class UpdateStudentScreen extends Component {

    render() {
        //console.log("student from list >> " + this.props.navigation.getParam('student'));
        // const student = this.props.navigation.getParam('student');
        return (
            <View>
                <UpdateStudentForm />
            </View>
        );
    }

}

export default UpdateStudentScreen;