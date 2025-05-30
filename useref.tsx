import React, {useRef} from "react";
import { TextInput , Button, View } from "react-native";
 
export default function Focus() {

const Inputref = useRef<TextInput>(null)

const focusInput = () => {
    Inputref.current?.focus();
};
return(
    <View style={{padding:100}}>
    <TextInput ref={Inputref} placeholder="Type Here" />
    <Button title="Focus" onPress={focusInput} />
    </View>
);
};