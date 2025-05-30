import React, { useState }from "react";
import{View,Text,Button} from 'react-native'

export default function Counter() {

    const[count,setCount]=useState(0);
const[decrement, setDecrement]=useState(10);
return(
    <View style={{padding:100}}>
        <Text style={{marginLeft:100}}>Count:{count}</Text>
        <Button title="increase" onPress={() => setCount(count + 1)} />
        
        <Text>Decrement:{decrement}</Text>
        <Button title="decrement" onPress={() => setDecrement(decrement -1)} />
        
        </View>
    
);
};