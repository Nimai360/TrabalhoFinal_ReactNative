import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from "../../global/styles";

export const styles = StyleSheet.create({
    container: {
        alignContent: "center",
        justifyContent: "center",
        alignSelf: "center",
        width: "100%",
        marginVertical: 5,
    },

    descricao: {
        color: Colors.textColor,
        fontSize: 20,
        textAlign: "center",
        marginBottom: -12,
    },

    skillProgress: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: "center",
        textAlign: "center",
        alignItems: "center",
        gap: 10,
    },

    progressBarDiv: {
        flexDirection: 'row',
        // position: 'absolute',
        width: '50%',
    },

    progressBar: {
        marginVertical: 10,
        height: 10,
        backgroundColor: Colors.secondaryColor,
        borderRadius: 100,
    },

    progressBarBg: {
        marginVertical: 10,
        height: 10,
        width: '100%',
        backgroundColor: Colors.coplementarPrimaryColor,
        borderRadius: 100,
    },

    btn: {
        justifyContent: 'center',
        borderColor: Colors.secondaryColor,
        borderWidth: 0.5,
        height: 38,
        width: 38,
        borderRadius: 100,
    },

    btnAddRemove: {
        textAlign: "center",
        justifyContent: 'center',
        color: Colors.textColor,
        fontSize: 44,
    },
})