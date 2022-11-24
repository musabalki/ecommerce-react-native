import React from 'react';
import {StyleSheet, Text,TouchableOpacity } from 'react-native';

const Button = ({ title,onPress }) => {

    return (
        <TouchableOpacity onPress={onPress} style={styles.button_container}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
}

export default Button;

const styles = StyleSheet.create({
    title:{
       fontSize:17,
        textAlign:"center", color:"white",fontWeight:"900"
    },
    button_container: {
        color:"white",
        height:60,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor: "#121a35",
        borderRadius: 14
    },
});