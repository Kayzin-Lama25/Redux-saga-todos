import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

import StudentList from '../components/StudentList';

class StudentListScreen extends Component {

    render() {
        return (
            <View style={{ flex: 1 }}>
                <StudentList />
            </View>
        );
    }
}

export default StudentListScreen;