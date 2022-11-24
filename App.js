import React, { useEffect } from 'react';
import { StyleSheet} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from "./pages/HomeScreen"
import SplashScreen from 'react-native-splash-screen'
import LoginScreen from "./pages/LoginScreen"
import RegisterScreen from "./pages/RegisterScreen"


const Stack = createNativeStackNavigator();

const App = () => {
    useEffect(() => {
        SplashScreen.hide();
    }, [])

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Register" component={RegisterScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    sign_in:{textAlign:"center",marginTop:20},
    strong:{fontWeight:"800",color:"#76777c",textAlign:"center"},
    text_input: {
        marginLeft: 20,
        fontSize: 16,
        color: "#7C82A1",
    },
    input_container: {
        backgroundColor: "white",
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        height: 56,
        paddingLeft: 16,
        paddingRight: 16,
        backgroundColor: "#F3F4F6",
        marginBottom: 16,
        borderRadius: 14
    },
    container: {
        flex: 1,
        backgroundColor:"white",
        justifyContent: "center",
        paddingLeft: 30,
        paddingRight: 30
    },
    title: {
        textAlign: "center",
        color:"#121a35",
        marginBottom:40,
        fontSize: 40,
        fontWeight: "800"
    }
});

export default App;
