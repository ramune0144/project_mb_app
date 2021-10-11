import React from "react"
import { View, Text, StyleSheet, TouchableOpacity, Image} from "react-native"
import color from "../constant/color";

const MemberScreen = ({ navigation }) => {

    return (<View>
        <TouchableOpacity
                    style={{ ...styles.button, ...{backgroundColor: "#b7094c"} }}
                    onPress={() => navigation.navigate("Home")}
        ></TouchableOpacity>
    </View>);
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 10
    },
    button: {
        alignItems: "center",
        
        padding: 30
        ,
        borderRadius: 20,
        marginTop:8,
        marginHorizontal:5

    },
    countContainer: {
        alignItems: "center",
        padding: 10
    }
});
export default MemberScreen;