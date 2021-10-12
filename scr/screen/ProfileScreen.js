import React from "react"
import { View,  StyleSheet,Text,Image} from "react-native"
import color from "../constant/color";

const ProfileScreen = ({route}) => {
    const item = route.params;
    return (
        <View style={{ backgroundColor: color.accentColor, flex: 1 }}>
           <Image source={{ uri: item.data.image }} style={style.image}/>
           <Text style={style.TextStyle}>{item.data.Firstname}  {item.data.Lastname}</Text>
           <Text style={style.info}>รหัสนิสิต   {item.data.ID}</Text>
           <Text style={style.info}>ชื่อเล่น      {item.data.Nickname}</Text>
           <Text style={style.info}>เบอร์โทร   {item.data.Tell}</Text>
           <Text style={style.info}>กรุ๊ปเลือด   {item.data.GroupBlood}</Text>
           <Text style={style.info}>อายุ            {item.data.Age}</Text>
        </View>

    );
}

const style = StyleSheet.create({
    image: {
        width: 170,
        height: 170,
        alignSelf: "center",
        marginTop: 30,
        padding: 10,
        borderRadius: 40,

    },
    TextStyle: {
        marginTop: 4,
        fontSize: 30,
        fontWeight: "bold",
        alignSelf: "center",
        color: "white"

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
    info: {
        marginLeft:70,    
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        marginTop: 20
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
