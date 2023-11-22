import { StyleSheet } from 'react-native';
import { Colors } from "../../global/styles";

export const styles = StyleSheet.create({
    registerContainer:{
        flexDirection: 'row',
        gap: 10,
        paddingTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },

    register:{
        color: Colors.textColor,
        fontSize: 16,
    },

    link:{
        color: Colors.secondaryColor,
        fontWeight: 'bold',
        fontSize: 16
    }
})