import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

class FlatListItem extends Component {

    //console.log("hello flat list item >> " + this.props.student.key);
    render() {

        const { buttonStyle, textStyle, deleteTextStyle } = styles;

        return (
            <TouchableOpacity style={buttonStyle} onPress={this.props.onPress}>
                <Text style={textStyle}>{this.props.student.name}</Text>
                <TouchableOpacity onPress={this.props.onFlatPress}>
                    <Text style={deleteTextStyle}>DELETE</Text>
                </TouchableOpacity>
            </TouchableOpacity>
        );
    }
}

const styles = {
    buttonStyle: {
        flex: 1,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#007aff'
    },
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    deleteTextStyle: {
        alignSelf: 'flex-end',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600'
    }
}

export default FlatListItem;
