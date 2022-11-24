import React from 'react';
import { StyleSheet, View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const Input = ({ type,title,onChangeText,value }) => {

    return (
        <View>
            {/* <Text style={styles.title}>{title}</Text> */}
            <View style={styles.input_container}>
                <Icon name={type} size={24} />
                <TextInput onChangeText={onChangeText} value={value} placeholder={title} style={styles.text_input}></TextInput>
            </View>
        </View>
    );
}

export default Input;

const styles = StyleSheet.create({
    title:{
        fontSize:16  
    },
    text_input: {
        marginLeft: 20,
        fontSize: 16,
        color: "#76777c",
        fontWeight:"600",
        flex:1
    },
    input_container: {
        backgroundColor: "white",
        flexDirection: "row",
        alignItems: "center",
        height:60,
        paddingLeft: 16,
        paddingRight: 16,
        backgroundColor: "#F3F4F6",
        marginBottom: 16,
        borderRadius: 14
    },
});