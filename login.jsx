import React ,{useState} from "react";
import { View,Text,Button,StyleSheet, TextInput } from "react-native";
import dash from "./dash";
import { useNavigation } from "@react-navigation/native";
import{RootStackParamlist} from "./App";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

  const Register_pg =({navigation}) =>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const userLogin =() => {
      if(username === 'sanjay007' && password==='9502'){
    navigation.navigate('home')
      }
      else{
        setError('Illegal Entry')
      }
    };
    return(

<View style={{padding:100,marginTop:100}}>
 <Text style={style.txt}>LOGIN</Text>
<TextInput style={style.input} onChangeText={setUsername} value={username} placeholder = "enter your email id (or) user name" />
<TextInput style={style.input} onChangeText={setPassword} value={password } placeholder= "enter your password " secureTextEntry />

{error? (<Text style={style.txt1}>{error}</Text> ): (null)}
<Button  title="LOGIN"  onPress={userLogin}/>
<Text style={{marginLeft:20}} onPress={() => navigation.navigate('new_pg')} >i don't have account: register</Text>

</View>
    );
};
const style=StyleSheet.create({
txt:{
    fontSize:30,
    marginLeft:50,
    fontWeight:"bold",

}, 
txt1:{
  color:"rgb(0, 0, 0)",
  backgroundColor:"red",
},  
input:{
    borderWidth:1,
    marginTop:10,
    borderColor:"black",
    color:"black"
},

});
export default Register_pg;