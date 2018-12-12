import React, { Component } from 'react';
import { View, Text, Modal } from 'react-native';
import CardSection from './CardSection';
import Button from './Button';

const Confirm = (props) => {

    const {containerStyle, textStyle, CardSectionStyle} = styles;

    return(
        <Modal
            animationType="slide"
            onRequestClose={() => {}}
            transparent
            visible={props.visible}
        >
            <View style={containerStyle}>
                <CardSection style={CardSectionStyle}>
                    <Text style={textStyle}>
                        {props.children}
                    </Text>
                </CardSection>

                <CardSection>
                    <Button text="Yes" onPress={props.onAccept} />
                    <Button text="No" onPress={props.onDecline} />
                </CardSection>
            </View>
        </Modal>
    );
}

const styles = {
    CardSectionStyle: {
        justifyContent: 'center'
    },
    textStyle: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 40 
    },
    containerStyle: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center'
    }
};

export default Confirm;