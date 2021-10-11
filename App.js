import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './scr/screen/HomeScreen';
import MemberScreen from './scr/screen/MemberScreen';
import color from './scr/constant/color';
import * as React from "react";
const Stack = createStackNavigator()
// const defaultStackNavOption={
//   headerStyle: { backgroundColor: color.primaryColor },
//   headerTintColor: "white",


// }



function App() {

  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"
       >
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name="MemberScreen" component={MemberScreen} options={{animationEnabled: true}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>

  )

}
export default App;