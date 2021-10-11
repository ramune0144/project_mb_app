import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './scr/screen/HomeScreen';
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
      </Stack.Navigator>
    </NavigationContainer>

  )

}
export default App;