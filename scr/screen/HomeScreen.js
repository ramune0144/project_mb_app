import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import color from "../constant/color";
const HomeScreen = ({ navigation }) => {

    return (
        <View style= {{backgroundColor:color.primaryColor,flex:1}}>
            <View style={{ marginTop: 50 }}>
                <TouchableOpacity
                    style={{ ...styles.button, ...{backgroundColor: "#b7094c"} }}
                    onPress={() => navigation.navigate("MemberScreen")}
                >
                    <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fffcf2" }}>Members</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ ...styles.button, ...{backgroundColor: "#5c4d7d"} }}
                    
                    onPress={() => navigation.navigate("Image")}
                >
                    <Text style={{ color: "#fffcf2"}}>TBA</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ ...styles.button, ...{backgroundColor: "#0091ad"} }}
                    onPress={() => navigation.navigate("Image")}
                >
                    <Text style={{ color: "#fffcf2"}} >TBA</Text>
                </TouchableOpacity>
            </View>
        </View>

    );
}

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
export default HomeScreen;



