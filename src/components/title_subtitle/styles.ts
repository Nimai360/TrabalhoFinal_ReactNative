import { StyleSheet } from 'react-native';
import { Colors } from "../../global/styles";

export const styles = StyleSheet.create({    
    title: {
        textAlign: 'center',
        color: Colors.secondaryColor,
        fontSize: 30,
        fontWeight: 'bold',
    },

    subTitle:{
        paddingTop: 10,
        paddingBottom: 20,
        textAlign: 'center',
        color: Colors.textColor,
        // paddingHorizontal: 20,
        opacity: 0.7,
        fontSize: 20,
    },
})