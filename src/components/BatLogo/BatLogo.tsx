import React from "react";
import { Image, Text, View } from "react-native";
import {styles} from "./BatLogoStyles"
import batLogo from "../../../assets/bat-logo.png"
export default function BatLogo(){

    return(
        <View >
            <Text style={styles.title}>Batpass Generator</Text>
            <Image source={batLogo} style={styles.image}/>
        </View>
    )
}