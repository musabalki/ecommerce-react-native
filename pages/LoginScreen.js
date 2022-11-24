import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Button from '../components/Button';
import Input from '../components/Input';

const LoginScreen = ({ navigation }) => {
    const signUp = () => {
        navigation.navigate('Register')
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.title}>Sign In</Text>
            </View>
            <Input type="mail" title="Email" />
            <Input type="lock" title="Password" />
            <Button title="Sign In" onPress={() => navigation.navigate('Home')} />
            <View style={styles.info}> 
                <Text style={styles.sign_in} >Already have an account? </Text>
                <TouchableOpacity onPress={signUp}><Text style={styles.strong}>Sign Up</Text></TouchableOpacity>
            </View>
        </SafeAreaView>
    );;
}

export default LoginScreen;

const styles = StyleSheet.create({
    info:{
        flexDirection:"row",marginTop:20,justifyContent:"center",
    },
    sign_in: { textAlign: "center", justifyContent: "center", alignItems: "center" },
    strong: { fontWeight: "800", color: "#76777c", textAlign: "center" },
    container: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        paddingLeft: 30,
        paddingRight: 30
    },
    title: {
        textAlign: "center",
        color: "#121a35",
        marginBottom: 40,
        fontSize: 40,
        fontWeight: "800"
    }
});