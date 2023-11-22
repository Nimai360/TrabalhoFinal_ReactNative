import { StyleSheet } from 'react-native';
import { Colors } from "../../global/styles";

export const styles = StyleSheet.create({    
    input: {
        textAlign: 'left',
        color: Colors.textColor,
        fontSize: 20,
        width: '80%',
        height: 35,
       },

       iconInput:{
        color: Colors.textOpacity,
        opacity: 0.7,
        fontSize: 20,
       },

       InputContainer:{
        width: '100%',
        marginTop: 10,
        flexDirection: "row", 
        alignItems: "center",
        justifyContent: "flex-start",
        borderBottomWidth: 1,
        borderColor: Colors.textOpacity,
        gap: 15,
       },


       input2: {
        backgroundColor: Colors.coplementarPrimaryColor,
        paddingTop: 10,
        textAlign: 'center',
        color: Colors.textColor,
        fontSize: 20,
        width: '100%',
        height: 35,
        borderBottomWidth: 1,
        borderColor: Colors.secondaryColor,
       },

       iconInput2:{
        position: 'absolute',
        right: 7,
        top: -10,
        color: Colors.textColor,
        opacity: 0.7,
        fontSize: 20,
       },

       InputContainer2:{
        marginTop: 10,
        flexDirection: "row", 
        alignItems: "center",
        justifyContent: "center",
       },
})