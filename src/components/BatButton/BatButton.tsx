import React from "react";
import { Button, View } from "react-native";

import {styles} from "./BatButtonStyle"

interface button {
    onPress?: () => void
}

export function BatButton({onPress}:button){
    return(
        <View style={styles.container}>
            <Button onPress={onPress?  onPress:() => {console.log("no function")}} title="Gerar Senha" accessibilityLabel="Gerar Senha" color="#505050"/>
        </View>
    )
}