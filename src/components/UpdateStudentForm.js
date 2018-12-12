import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import StudentForm from './StudentForm';
import Card from './common/Card';
import CardSection from './common/CardSection';
import Button from './common/Button';

import { add_student_text_changed, update_student_action } from '../action';

class UpdateStudentForm extends Component {

    render() {

        return (
            <Card>
                <StudentForm {...this.props} />
                <CardSection>
                    <Button text="Update" onPress={() => this.props.update_student_action(this.props)} />
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProp = (state) => {
    const { name, phone, student_email, address, uid } = state.student;
    return { name, phone, student_email, address, uid };
}

export default connect(mapStateToProp, { add_student_text_changed, update_student_action })(UpdateStudentForm);