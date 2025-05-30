import React from "react";
import {View,TextInput,Button,StyleSheet,Text} from "react-native";
import{RootStackParamlist} from "./App";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type props = NativeStackScreenProps<RootStackParamlist,"register">;
const Login_pg:React.FC<props>=({ navigation}) =>{

    return(
<View style={{padding:100,marginTop:100}}>
 <Text style={style.txt}>REGISTER</Text>
<TextInput style={style.input} placeholder = "enter your name" />
<TextInput style={style.input}placeholder= "enter email id " />
<TextInput style={style.input}placeholder=" enter your password"secureTextEntry />
<Text></Text>
 <Button title="REGISTER"   onPress={() => navigation.navigate('register')} />
<Text style={{marginLeft:50}} onPress={() => navigation.navigate('register')}> </Text>


</View>
    );
};
const style=StyleSheet.create({
txt:{
    fontSize:30,
    marginLeft:50,
},    
input:{
    borderWidth:1,
    marginTop:10,
    borderColor:"black",
    color:"black"
},

});
export default Login_pg;