import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from "../../global/styles";

export const styles = StyleSheet.create({
    button: {
        width: '100%',
        flexDirection: 'row',
        backgroundColor: Colors.secondaryColor,
        paddingHorizontal: 30,
        // borderRadius: 100,
        borderRadius: 5,
        paddingVertical: 10,
        gap: 10,
        marginTop: 30,
        textAlign: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: Colors.secondaryColor,
        elevation: 15,
    },

    icon: {
        color: Colors.textColor,
        fontSize: 24,
    },

    buttonText: {
        color: Colors.textColor,
        fontSize: 24,
        fontWeight: 'bold',
    },


    button2: {
        flexDirection: 'row',
        backgroundColor: Colors.secondaryColor,
        paddingHorizontal: 30,
        borderRadius: 100,
        paddingVertical: 10,
        gap: 10,
        marginTop: 30,
        marginBottom: -25,
    },

    buttonText2: {
        color: Colors.textColor,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center',
    },
})