import React, { useState } from "react";
import { View } from "react-native";
import {styles} from "./HomeStyle"
import BatLogo from "../../components/BatLogo/BatLogo";
import BatTextInput from "../../components/BatTextInput/BatTextInput";
import { BatButton } from "../../components/BatButton/BatButton";
import generatePass from "../../services/passwordService";
import * as Clipboard from "expo-clipboard"

export default function Home(){
const[pass,setPass]= useState("")
const handleGeneratePass = () => {
let getPass = generatePass()
setPass(getPass)
}

const handleCopyPass = () => {
    Clipboard.setStringAsync(pass)
}

    return(
        <View style={styles.container}>
            <View style={styles.logoContainer}>
            <BatLogo/>
            </View>
            <View style={styles.inputContainer}>
                <BatTextInput value={pass} Copy onPress={handleCopyPass}/>
                <BatButton onPress={handleGeneratePass}/>
            </View>
        </View>
    )
}