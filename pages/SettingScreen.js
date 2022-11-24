import { View, Text, SafeAreaView, StyleSheet,Image, Button } from "react-native"

const SettingScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={{fontSize:20,fontWeight:"900",textAlign:"center",marginTop:50}}>YAKINDA</Text>
            </View>
        </SafeAreaView>
    );
}

export default SettingScreen;

const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: "white",
        paddingLeft: 20,
        paddingRight: 20
    },
});