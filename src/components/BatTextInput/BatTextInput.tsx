import React from "react";
import {styles} from "./BatTextInputStyles"
import { Button, Pressable, Text, TextInput,  View} from "react-native";

interface Input {
    Copy?:Boolean,
    onPress?: () => void,
    value: string
}

export default function BatTextInput({Copy, onPress, value}:Input){


    return(
        <View style={styles.containerInput}>
           <TextInput
            placeholder="Password"
            style={styles.input}
            value={value}
            >
            </TextInput>
            {Copy? <Pressable onPress={onPress? onPress:() => console.log("Sem Function")} style={styles.button}><Text style={{fontSize:24}}>💬</Text></Pressable>: <></>}
        </View>
                )
}