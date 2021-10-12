import React from "react"
import { View,  StyleSheet} from "react-native"
import color from "../constant/color";
import ButtonMain from "../component/ButtonMain"
const MainScreen = () => {

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

export default MainScreen;



