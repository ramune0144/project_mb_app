import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './scr/screen/HomeScreen';
import MemberScreen from './scr/screen/MemberScreen';
import ProfileScreen from './scr/screen/ProfileScreen';
import * as React from "react";
const Stack = createStackNavigator()
// const defaultStackNavOption={
//   headerStyle: { backgroundColor: color.primaryColor },
//   headerTintColor: "white",


// }

const defaultStackNavOption={
  headerStyle: { backgroundColor: Colors.primaryColor },
  headerTintColor: "white",


}

function App() {

  return (

    <NavigationContainer
    screenOptions={
      defaultStackNavOption
  }>
      <Stack.Navigator initialRouteName="Home"
       >
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name="MemberScreen" component={MemberScreen} ></Stack.Screen>
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>

  )

}
export default App;