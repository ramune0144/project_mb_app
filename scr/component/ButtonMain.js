import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
const ButtonMain = ({ name, color, navigate_name }) => {
    const navigation = useNavigation()
    return (<TouchableOpacity
        style={{ ...styles.button, ...{ backgroundColor: color } }}
        onPress={() => navigation.navigate(navigate_name)}
    >
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fffcf2" }}>{name}</Text>
    </TouchableOpacity>)
}
export default ButtonMain

const styles = StyleSheet.create({
    
    button: {
        alignItems: "center",

        padding: 30
        ,
        borderRadius: 20,
        marginTop: 12,
        marginHorizontal: 5

    },
    
});