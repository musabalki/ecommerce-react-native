import { View, Text, SafeAreaView, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView } from "react-native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchScreen from "./SearchScreen";
import SettingScreen from "./SettingScreen";
import CartScreen from "./CartScreen";
import Icon from 'react-native-vector-icons/FontAwesome5';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator()

const Home = () => {
    const DATA = [
        {
            id: 1,
            title: "Organic Bananas",
            price: 4.99,
        },
        {
            id: 2,
            title: "Organic Bananas",
            price: 4.99,
        },
        {
            id: 3,
            title: "Organic Bananas",
            price: 4.99,
        }
    ]
    const renderItem = ({ item }) => {


        return (
            <View style={{ border: 1, borderColor: "rgba(226, 226, 226, 1)", borderWidth: 1, padding: 22, marginRight: 14, borderRadius: 10 }}>
                <Image source={require("../img/banana.png")} />
                <Text style={styles.product_title}>
                    {item.title}
                </Text>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 12 }}>
                    <Text style={{ fontWeight: "500", color: "black" }}>${item.price}</Text>
                    <TouchableOpacity onPress={() => alert(item.id)} style={{ backgroundColor: "#53B175", color: "white", width: 42, height: 42, justifyContent: "center", alignItems: "center", borderRadius: 14 }}>
                        <Icon name="plus" size={18} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>

                    <Text style={styles.title}>Exclusive Offer</Text>

                    <FlatList showsHorizontalScrollIndicator={false} horizontal={true}
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                    />
                    <Image source={require("../img/banner.png")} style={{ width: "100%", borderRadius: 14, marginTop: 20 }} />
                    <Text style={styles.title}>Best Selling</Text>
                    <FlatList horizontal={true} showsHorizontalScrollIndicator={false}

                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                    />
                    <Image source={require("../img/banner.png")} style={{ width: "100%", borderRadius: 14, marginTop: 20 }} />
                    <Text style={styles.title}>New Products</Text>
                    <FlatList horizontal={true} showsHorizontalScrollIndicator={false}

                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                    />

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    plus: {
        backgroundColor: "#53B175",
        color: "white",
        padding: 8,
        justifyContent: "center",
        borderRadius: 12,
    },
    top: {
        marginTop: 20,
    },
    container: {
        flex: 1,
        backgroundColor: "white",
        paddingLeft: 30,
        paddingRight: 30
    },
    title: {
        marginBottom: 20,
        marginTop: 20,
        fontWeight: "800",
        color: "black",
        fontSize: 24
    },
    product_title: {
        fontSize: 14,
        fontWeight: "800",
        color: "black",
        marginTop: 12
    }
});

const screenOptions = (route, color) => {
    let iconName;

    switch (route.name) {
        case 'HomeScreen':
            iconName = 'home';
            return <Icon name={iconName} color="black" size={20} />;
        case 'SearchScreen':
            iconName = 'text-search';
            return <Material name="text-search" color="black" size={27} />;
        case 'CartScreen':
            iconName = '';
            return <Feather name="heart" color="black" size={27} />;
        case 'SettingScreen':
            iconName = 'cog';
            return <Icon name={iconName} color="black" size={20} />;
        default:
            break;
    }


};

const HomeScreen = ({ navigation }) => {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ color }) => screenOptions(route, color),
        })}
            tabBarOptions={{
                showLabel: false
            }}
        >
            <Tab.Screen name="HomeScreen" component={Home} options={{ headerShown: false }} />
            <Tab.Screen name="SearchScreen" component={SearchScreen} options={{ headerShown: false }} />
            <Tab.Screen name="CartScreen" component={CartScreen} options={{ headerShown: false }} />
            <Tab.Screen name="SettingScreen" component={SettingScreen} options={{ headerShown: false }} />
        </Tab.Navigator>

    )
}

export default HomeScreen;
