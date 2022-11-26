import { View, Text, SafeAreaView, StyleSheet, Image, Button, FlatList } from "react-native"
import Icon from "react-native-vector-icons/AntDesign"

const SettingScreen = ({ navigation }) => {
    const data = [
        {
            id: 1,
            title: "Orders",
            icon: require('../img/settings/orders.png'),
        },
        {
            id: 2,
            title: "My Details",
            icon: require('../img/settings/detail.png'),
        },
        {
            id: 3,
            title: "Delivery Adress",
            icon: require('../img/settings/delivery.png'),
        },
        {
            id: 4,
            title: "Payment Methods",
            icon: require('../img/settings/payment.png'),
        },
        {
            id: 5,
            title: "Promo Cord",
            icon: require('../img/settings/promo.png'),
        },
        {
            id: 6,
            title: "Notifecations",
            icon: require('../img/settings/bell.png'),
        },
        {
            id: 7,
            title: "Help",
            icon: require('../img/settings/help.png'),
        },
        {
            id: 8,
            title: "About",
            icon: require('../img/settings/about.png'),
        }
    ]
    const renderItem = ({ item }) => {
        return (<View style={{ flexDirection: "row", alignItems: "center", paddingBottom: 20, paddingTop: 20, borderBottomWidth: 1, borderBottomColor: "rgba(226, 226, 226, 1)" }}>
            <Image source={item.icon} style={{ height: 24, width: 24, resizeMode: "contain" }} />
            <Text style={{ marginLeft: 20, fontSize: 18, fontWeight: "800", textAlign: "center", color: "#181725" }}>{item.title}</Text>
            <Icon name="right" size={20} color="black" style={{ flex: 1, textAlign: "right" }} />
        </View>)
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={{flexDirection:"row",alignItems:"center",paddingTop:20,paddingBottom:20,borderBottomWidth: 1, borderBottomColor: "rgba(226, 226, 226, 1)"}}>
                <Image source={require('../img/musabalki.jpg')} style={{ height: 70, width: 70, borderRadius: 100, resizeMode: "contain" }} />
                <View style={{marginLeft:20}}>
                    <Text style={{ fontSize: 20, fontWeight: "800", color: "black" }}>Musa Balkı</Text>
                    <Text style={{ fontSize: 16, color: "#7C7C7C" }}>musabalkimb@gmail.com</Text>
                </View>
            </View>
            <FlatList showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} data={data} renderItem={renderItem} keyExtractor={(item) => item.id} />
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