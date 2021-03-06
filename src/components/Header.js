import React from 'react';
import { Text, View } from 'react-native';
import { Constants } from 'expo';

const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        paddingTop: Constants.statusBarHeight + 15,
        alignItems: 'center',
        height: 60,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative',
        paddingBottom: 5
    },
    textStyle: {
        fontSize: 20
    }
};

export {Header};