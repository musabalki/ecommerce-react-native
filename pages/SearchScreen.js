import { View, Text, SafeAreaView, StyleSheet, Image, FlatList, Dimensions } from "react-native"
import { useEffect, useState } from "react"
import Input from '../components/Input';

const SearchScreen = () => {

    const initialData = [
        {
            id: 1,
            title: "Bakery & Snacks",
            state: true,
            image: require('../img/search/pngfuel_1.png'),
            bgColor: "rgba(83, 177, 117, 0.1)",
            border: "rgba(83, 177, 117, 0.7)",
        },
        {
            id: 2,
            title: "Dairy & Eggs",
            state: true,
            image: require('../img/search/pngfuel_2.png'),
            bgColor: "rgba(248, 164, 76, 0.1)",
            border: "rgba(248, 164, 76, 0.7)"
        },
        {
            id: 3,
            title: "Meat & Fish",
            state: false,
            image: require('../img/search/pngfuel_3.png'),
            bgColor: "rgba(247, 165, 147, 0.25)",
            border: "rgba(247, 165, 147, 0.7)",
        },
        {
            id: 4,
            title: "Cooking Oil & Ghee",
            state: true,
            image: require('../img/search/pngfuel_4.png'),
            bgColor: "rgba(211, 176, 224, 0.25)",
            border: "rgba(211, 176, 224, 0.7)",
        },
        {
            id: 5,
            title: "Frash Fruits & Vegetable",
            state: false,
            image: require('../img/search/pngfuel_5.png'),
            bgColor: "rgba(253, 229, 152, 0.25)",
            border: "rgba(253, 229, 152, 0.7)",
        },
        {
            id: 6,
            title: "Beverages",
            state: false,
            image: require('../img/search/pngfuel_6.png'),
            bgColor: "rgba(183, 223, 245, 0.25)",
            border: "rgba(183, 223, 245, 0.7)",
        }
    ]
    const [data, setData] = useState(initialData);
    const [filterData, setFilterData] = useState(initialData);
    const [value, setValue] = useState("");

    let deviceHeight = Dimensions.get('window').height

    const renderItem = ({ item }) => (
        <View style={{ height: deviceHeight / 3 - 50, width: "50%", }} >
            <View style={{ borderRadius: 14, borderWidth: 1, borderColor: item.border, padding: 30, backgroundColor: item.bgColor, flex: 1, margin: 10, justifyContent: "space-between" }}>
                <Image source={item.image} style={{ textAlign: "centers", justifyContent: "center", alignItems: "center" }} />
                <Text style={{ textAlign: "center", fontSize: 16, fontWeight: "800" }}>
                    {item.title}
                </Text>
            </View>
        </View>
    );

    

    useEffect(() => {
        const res = data.filter(
            (listItem) => listItem.title.toLowerCase().includes(value.toLowerCase()),
        );
        setFilterData(res)
    }, [value])

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.top}>
                <Text style={{ fontSize: 22, fontWeight: "900", color: "black", textAlign: "center", marginBottom: 20 }}>Find Products</Text>
                <Input onChangeText={setValue} value={value} title="Search" type="search" />
            </View>
            {
                filterData.length == 0 ? <View style={{justifyContent:"center",alignItems:"center",height:60,backgroundColor:"rgba(247, 165, 147, 0.25)", borderRadius:14,marginLeft:10,marginRight:10}}><Text style={{textAlign:"center",fontWeight:"800"}}>Not Found</Text></View> : <FlatList showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} numColumns="2" data={filterData}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id} />
            }
        </SafeAreaView>
    )
}
export default SearchScreen;

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