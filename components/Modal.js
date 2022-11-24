const Modal = () => {
    return (<View style={{ position: "absolute", zIndex: 2, flex: 1, width: "100%" }}>
        <View style={{
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5, margin: 15, backgroundColor: "white", padding: 20, borderRadius: 10, flex: 1
        }}>
            <Text style={{ fontWeight: "900" }}>Success</Text>
        </View>
    </View>);
}

export default Modal;