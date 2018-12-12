import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';

import FlatListItem from './FlatListItem';
import { fetchStudentList, studentScreenChanged, deleteStudent } from '../action';

import NavigationService from '../navigation/NavigationService';

class StudentList extends Component {

    constructor() {
        super();
    }

    componentWillMount() {
        this.props.fetchStudentList();
    }

    renderFlatItem(item) {
        return (
            <FlatListItem student={item} onPress={() => this.onPressItem(item)} onFlatPress={() => this.props.deleteStudent(item)} />
        );
    }

    onPressItem(item) {
        this.props.studentScreenChanged(item);
        NavigationService.navigate('UpdateStudent');
    }

    render() {

        //const strArr = [{ key: 'a' }, { key: 'b' }, { key: 'c' }, { key: 'd' }];
        console.log("rendering ........" + JSON.stringify(this.props.student));
        if (this.props.student.length != - 0) {
            return (
                <View>
                    <FlatList
                        data={this.props.student}
                        extraData={this.props.student}
                        keyExtractor={(item) => item.name}
                        renderItem={({ item }) => this.renderFlatItem(item)}
                    />
                </View>
            );
        } else {
            return (
                <View>
                    <Text>No Data To Show</Text>
                </View>
            )
        }


    };
}

const mapStateToProp = (state) => {
    const student = _.map(state.studentList, (val, uid) => {            //transforming object to array
        return { uid, ...val };
    });
    return { student };
}
export default connect(mapStateToProp, { fetchStudentList, studentScreenChanged, deleteStudent })(StudentList);
//export default StudentList;