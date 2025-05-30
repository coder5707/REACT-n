import React from "react";
import { View,Text,StyleSheet, Button } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamlist } from "./App";

type props = NativeStackScreenProps<RootStackParamlist,"home">;
const Dash:React.FC<props>=({ navigation}) =>{


return(
<View style={{marginTop:400,marginLeft:100,marginRight:100}}>
    <Text style={style.txt}>WELCOME TO DASHBOARD</Text>
     <Button title="CLICK"  onPress={() => navigation.navigate('studentinfo')} />
    </View>
);
};
const style=StyleSheet.create({
txt:{
    fontSize:15,
    fontWeight:"bold",
},
});
export default Dash;