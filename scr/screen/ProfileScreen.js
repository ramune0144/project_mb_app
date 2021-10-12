import React from "react"
import { View,  StyleSheet,Text,Image} from "react-native"
import color from "../constant/color";

const ProfileScreen = ({route}) => {
    const item = route.params;
    return (
        <View style={{ backgroundColor: color.accentColor, flex: 1 }}>
           <Image source={{ uri: item.data.image }} style={style.image}/>
           <Text>{item.data.Firstname}</Text>
           <Text>{item.data.Lastname}</Text>
           <Text>{item.data.ID}</Text>
           <Text>{item.data.Nickname}</Text>
           <Text>{item.data.Tell}</Text>
           <Text>{item.data.GroupBlood}</Text>
           <Text>{item.data.Age}</Text>
        </View>

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

export default ProfileScreen;
