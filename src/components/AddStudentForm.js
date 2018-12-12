import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import StudentForm from './StudentForm';
import Card from './common/Card';
import CardSection from './common/CardSection';
import Button from './common/Button';

import { add_student_text_changed, add_student_action } from '../action';

class AddStudentForm extends Component {

    render() {

        return (
            <Card>
                <StudentForm {...this.props} />
                <CardSection>
                    <Button text="Add" onPress={() => this.props.add_student_action(this.props)} />
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProp = (state) => {
    const { name, phone, student_email, address } = state.student;
    //console.log("here add student form in mapStateToProps >> " + JSON.stringify(state.student));
    return { name, phone, student_email, address };
}

export default connect(mapStateToProp, { add_student_text_changed, add_student_action })(AddStudentForm);