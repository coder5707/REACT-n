import React from "react";
import { View  } from "react-native";
import Welcome from'./welcome';
import Register_pg from "./login";
import Focus from "./useref";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dash from "./dash";
import Login_pg from "./login2"
import Id from "./id";
import studentinfo from "./data";
import Game from "./game";
export type RootStackParamlist={
  register:undefined;
  home:undefined;
  new_pg:undefined;
}

 const Stack=createNativeStackNavigator<RootStackParamlist>();

const App = () => {
   
return(
  
 <NavigationContainer>
      <Stack.Navigator initialRouteName="register">
        <Stack.Screen name="register" component={Register_pg} />
        <Stack.Screen name="home" component={Dash} />
         <Stack.Screen name="new_pg" component={Login_pg} />
         <Stack.Screen name="studentinfo" component={studentinfo}/>
         <Stack.Screen name="Game" component={Game}/>
      </Stack.Navigator>
    </NavigationContainer>
    
);
};
export default App;

