import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import CardSection from './common/CardSection';
import Input from './common/Input';

class StudentForm extends Component {

    render() {

        const { name, phone, address, student_email } = this.props;
        console.log("rendering in StudentForm >> " + JSON.stringify(this.props));
        return (
            <View>
                <CardSection>
                    <Input
                        label="Name"
                        placeholder="Name"
                        value={name}
                        onChangeText={text => this.props.add_student_text_changed({ prop: 'name', value: text })}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Phone"
                        placeholder="09-******"
                        value={phone}
                        onChangeText={text => this.props.add_student_text_changed({ prop: 'phone', value: text })}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="email"
                        placeholder="email@domain.com"
                        value={student_email}
                        onChangeText={text => this.props.add_student_text_changed({ prop: 'student_email', value: text })}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Address"
                        placeholder="Address"
                        value={address}
                        onChangeText={text => this.props.add_student_text_changed({ prop: 'address', value: text })}
                    />
                </CardSection>
            </View>

        );
    }

}

/* const mapStateToProp = (state) => {
    const { name, email, phone, address } = state.student;
    return { name, email, phone, address };
}

export default connect(mapStateToProp, { add_student_text_changed })(StudentForm); */
export default StudentForm;