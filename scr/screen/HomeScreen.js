import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import color from "../constant/color";
import ButtonMain from "../component/ButtonMain"
const HomeScreen = ({ navigation }) => {

    return (
        <View style={{ backgroundColor: color.primaryColor, flex: 1 }}>
            <View style={{ marginTop: 50 }}>
                <ButtonMain name="Member" color="#b7094c" navigate_name="MemberScreen" />
                <ButtonMain name="TBA" color="#5c4d7d" navigate_name="MemberScreen" />
                <ButtonMain name="TBA" color="#0091ad" navigate_name="MemberScreen" />
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
        marginTop: 8,
        marginHorizontal: 5

    },
    countContainer: {
        alignItems: "center",
        padding: 10
    }
});
export default HomeScreen;



