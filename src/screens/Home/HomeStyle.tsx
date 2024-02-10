import { StyleSheet } from "react-native";

export const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            width:"100%",
            backgroundColor:"#231F1F",
            alignItems:"center",
            justifyContent:"center"
        },
        logoContainer:{
            backgroundColor:"#303030",
            flexDirection:"column",
            alignContent:'center',
            justifyContent:"center",
            padding:5,
            marginBottom:75
        },
        inputContainer:{
            width:"80%",
            height:200,
            flexDirection:"column",
            alignItems:"center",
            justifyContent:"space-around",
        }
    }
)