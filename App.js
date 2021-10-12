import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './scr/screen/MainScreen';
import MemberScreen from './scr/screen/MemberScreen';
import ProfileScreen from './scr/screen/ProfileScreen';
import * as React from "react";
import color from './scr/constant/color';
const Stack = createStackNavigator()
const defaultStackNavOption={
  headerStyle: { backgroundColor: color.primaryColor },
  headerTintColor: "white",


}



function App() {

  return (

    <NavigationContainer
>
      <Stack.Navigator initialRouteName="Home"
          screenOptions={
            defaultStackNavOption
        }
      >
        <Stack.Screen name="Home" component={MainScreen} options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name="MemberScreen" component={MemberScreen} ></Stack.Screen>
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>

  )

}
export default App;