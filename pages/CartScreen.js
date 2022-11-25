import { View, Text, SafeAreaView, StyleSheet, Image, FlatList, Dimensions, TouchableOpacity } from "react-native"
import { useEffect, useState } from "react"
import Input from '../components/Input';
import Icon from 'react-native-vector-icons/AntDesign';

const CartScreen = () => {

    const initialData = [
        {
            id: 1,
            title: "Bell Pepper Red",
            descp:"1kg,Price",
            state: true,
            price:4.99,
            image: require('../img/cart/cart_1.png'),
            bgColor: "rgba(83, 177, 117, 0.1)",
            border: "rgba(83, 177, 117, 0.7)",
        },
        {
            id: 2,
            title: "Ginger",
            descp:"250gm, Price",
            state: true,
            price:1.99,
            image: require('../img/cart/cart_2.png'),
            bgColor: "rgba(248, 164, 76, 0.1)",
            border: "rgba(248, 164, 76, 0.7)"
        },
        {
            id: 3,
            title: "Egg Chicken Red",
            descp:"4pcs, Price",
            state: false,
            price:3.50,
            image: require('../img/cart/cart_3.png'),
            bgColor: "rgba(247, 165, 147, 0.25)",
            border: "rgba(247, 165, 147, 0.7)",
        },
        {
            id: 4,
            title: "Organic Bananas",
            descp:"12kg, Price",
            price:4.99,
            state: true,
            image: require('../img/cart/cart_4.png'),
            bgColor: "rgba(211, 176, 224, 0.25)",
            border: "rgba(211, 176, 224, 0.7)",
        },
        {
            id: 5,
            title: "Bell Pepper Red",
            descp:"1kg,Price",
            state: true,
            price:4.99,
            image: require('../img/cart/cart_1.png'),
            bgColor: "rgba(83, 177, 117, 0.1)",
            border: "rgba(83, 177, 117, 0.7)",
        },
        {
            id: 6,
            title: "Ginger",
            descp:"250gm, Price",
            state: true,
            price:1.99,
            image: require('../img/cart/cart_2.png'),
            bgColor: "rgba(248, 164, 76, 0.1)",
            border: "rgba(248, 164, 76, 0.7)"
        },
    ]
    const [data, setData] = useState(initialData);
    const [filterData, setFilterData] = useState(initialData);



    const renderItem = ({ item }) => (
        <View style={{paddingBottom:20,paddingTop:20, width: "100%", borderBottomWidth: 1, borderColor: "rgba(226, 226, 226, 1)", flexDirection: "row", justifyContent: "center", alignItems: "center" }} >
            <View style={{ width: 80, height: 100,justifyContent:"center",alignItems:"center" }} >
                <Image source={item.image} />
            </View>
            <View style={{ paddingLeft: 20}}>
                <Text style={{ fontSize: 15, fontWeight: "600", color: "black" }}>{item.title}</Text>
                <Text style={{paddingTop:10,paddingBottom:10}}>{item.descp}</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <TouchableOpacity onPress={() => alert(item.id)} style={{ borderColor: "rgba(240, 240, 240, 1)", borderWidth: 1, backgroundColor: "white", color: "black", width: 42, height: 42, justifyContent: "center", alignItems: "center", borderRadius: 14 }}>
                        <Icon name="minus" size={18} color="rgba(83, 177, 117, 1)" />
                    </TouchableOpacity>
                    <Text style={{paddingLeft:10,paddingRight:10,fontWeight:"800",color:"black"}}>1</Text>
                    <TouchableOpacity onPress={() => alert(item.id)} style={{ borderColor: "rgba(240, 240, 240, 1)", borderWidth: 1, backgroundColor: "white", color: "black", width: 42, height: 42, justifyContent: "center", alignItems: "center", borderRadius: 14 }}>
                        <Icon name="plus" size={18} color="rgba(83, 177, 117, 1)" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{flex: 1, justifyContent:"space-between",alignItems:"space-between",height:90 }}>
                <TouchableOpacity onPress={() => alert(item.id)} style={{ color: "black", width: 42, height: 42, justifyContent: "center", alignItems: "center", borderRadius: 14 }}>
                    <Icon name="close" size={20} color="rgba(179, 179, 179, 1)" />
                </TouchableOpacity>
                <Text style={{fontWeight:"800",fontSize:18,color:"black"}}>${item.price}</Text>
            </View>
        </View>
    );




    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.top}>
                <Text style={{ fontSize: 22, fontWeight: "900", color: "black", textAlign: "center", marginBottom: 20 }}>My Cart</Text>
                
            </View>
            {
                filterData.length == 0 ? <View style={{ justifyContent: "center", alignItems: "center", height: 60, backgroundColor: "rgba(247, 165, 147, 0.25)", borderRadius: 14, marginLeft: 10, marginRight: 10 }}><Text style={{ textAlign: "center", fontWeight: "800" }}>Not Found</Text></View> : <FlatList showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id} />
            }
        </SafeAreaView>
    )
}
export default CartScreen;

const styles = StyleSheet.create({
    top: {
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10
    },
    container: {
        height: "100%",
        backgroundColor: "white",
        paddingLeft: 20,
        paddingRight: 20
    },
});