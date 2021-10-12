import React from "react"
import { View,  FlatList, StyleSheet } from "react-native"
import data from "../data/listName.json"
import color from "../constant/color";
import ListIndex from "../component/listindex";

const MemberScreen = () => {

    const contacts = data.Member;

    return (
        <View style={{ ...style.viewstyle, ...{ backgroundColor: color.accentColor} }}>
            
            <FlatList keyExtractor={friend => friend.ID}
                data={contacts} renderItem={({ item }) => {
                    return (
                        <ListIndex item = {item}/>
                    );
                }} />
        </View>

    );
}
const style = StyleSheet.create({

    viewstyle: {
        flex: 1,
        alignItems: "center",
        paddingTop: 20,
    }
  
    
})


export default MemberScreen;

