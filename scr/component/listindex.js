import React from "react"
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native"
import { useNavigation } from '@react-navigation/native';
const ListIndex=({item})=>{
const navigation = useNavigation()
return (
    <TouchableOpacity

        onPress={() => navigation.navigate("ProfileScreen",{ data: item })}
    >
        <View style={style.listtitle}>
            <View style={style.liststyle}>

                <View style={style.bord}  >

                    <Image source={{ uri: item.image }} style={style.image} />


                </View>


                <View style={style.textbox}>

                    <Text style={style.name}>ชื่อ {item.Firstname}  </Text>
                    <Text style={style.name}>นามสกุล {item.Lastname}  </Text>
                    <Text style={style.name}>ID {item.ID}  </Text>
                </View>
            </View>

        </View>
    </TouchableOpacity>
);
}

const style = StyleSheet.create({
    image: {
        width: 70,
        height: 70,
        padding: 40,
        borderRadius: 90,


    },
    
    liststyle: {
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
        paddingTop: 10,
        
    },

    listtitle: {
        padding: 10,
        backgroundColor: "#b7094c",
        margin: 6,
        width: 400,
        fontSize: 15,


    },
   
    bord: {
        borderWidth: 5,
        borderRadius: 90,
        borderColor: "#5c4d7d"

    },
    name: {
        marginLeft:12,    
        fontSize: 20,
        fontWeight: "bold",
        color: "white"
    },
    
    textbox: {
        justifyContent: "space-between"
    }
});


export default ListIndex