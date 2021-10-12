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
        padding: 10,
        borderRadius: 90,


    },
    TextStyle: {
        fontSize: 50,
        fontWeight: "bold"

    }
    ,
    viewstyle: {
        flex: 1,
        alignItems: "center",
        paddingTop: 20,
    }
    ,
    liststyle: {
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
        paddingTop: 20,
    },

    listtitle: {
        padding: 10,
        backgroundColor: "#cce2cb",
        margin: 3,
        width: 400,
        fontSize: 15,


    },
    teltitle: {

        backgroundColor: "#FFE8F9",
        margin: 1,
        width: 200,


    },
    bord: {
        borderWidth: 3,
        borderRadius: 90,
        borderColor: "#817D80"

    },
    name: {
        marginLeft:9,    
        fontSize: 20,
        fontWeight: "bold",
    },
    textcon: {
        marginLeft: 10,
    }
    ,
    textbox: {
        justifyContent: "space-between"
    }
});


export default ListIndex