import { StyleSheet } from "react-native";

export const styles = StyleSheet.create(
    {
        containerInput:{
            width:"100%",
            display:"flex",
            flexDirection:"row",
            alignItems:"center"
        },
        input:{
            width:"80%",
            backgroundColor:"white",
            alignItems:"center",
            justifyContent:"center",
            fontSize:18,
            height:39,
            borderWidth:1,
            borderTopLeftRadius:5,
            borderBottomLeftRadius:5
        },
        button:{
            width:"20%",
            height:40,
            alignItems:"center",
            justifyContent:"center",
            elevation:3,
            borderTopWidth:1,
            borderBottomWidth:1,
            borderRightWidth:1,
            borderTopRightRadius:5,
            borderBottomRightRadius:5,
            backgroundColor:"#505050"
        }
    }
)