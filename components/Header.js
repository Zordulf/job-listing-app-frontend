import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';

const Header = (props) => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: Platform.OS === 'android' ? '#72bcd4' : '#ffffff',
        padding: 15,
        borderBottomColor: Platform.OS === 'android' ? '#ffffff' : '#72bcd4',
        borderBottomWidth: 1
    },
    title: {
        margin: 10,
        textAlign: 'center',
        fontSize: 20,
        color: Platform.OS === 'android' ? '#ffffff' : '#72bcd4', 
        fontFamily: 'Ubuntu-Bold'
    },
});

export default Header;