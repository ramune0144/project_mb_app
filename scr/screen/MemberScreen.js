import React from "react"
import { View, Text, StyleSheet, FlatList, Image } from "react-native"
import data from "../data/listName.json"
const contactScreen = () => {

    const contacts = data.contacts;
    return (
        <View style={style.viewstyle}>
            <Text style={style.TextStyle}>contacts Screen</Text>
            <FlatList keyExtractor={friend => friend.id}
                data={contacts} renderItem={({ item }) => {
                    return (
                        <View style={style.listtitle}>
                            <View style={style.liststyle}>
                               
                                <View style={style.bord}  >
                                    <Image source={require(item.image)} style={style.image} />
                                </View>
                                
                                <View style = {style.textbox}>
                                <Text style = {style.name}> {item.name} </Text>
                                <Text style = {style.textcon}>{item.email}  {item.phone}</Text>
                                </View>
                            </View>
                            
                        </View>
                    );
                }} />
        </View>

    );
}
export default contactScreen;

const style = StyleSheet.create({
    image: {
        width: 25,
        height: 25,
        margin: 25,
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

        fontSize: 20,
        fontWeight: "bold",
    },
    textcon:{
        marginLeft:10,
    }
    ,
    textbox:{
        justifyContent:"space-between"
    }
});
