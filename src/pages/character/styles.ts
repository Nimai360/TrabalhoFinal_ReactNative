import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from "../../global/styles";

export const styles = StyleSheet.create({
    container: {
        flex: 0.7,
        justifyContent: "center",
    },

    containerScroll: {
        flex: 1,
        marginTop: 15,
    },

    title: {
        textAlign: "center",
        justifyContent: 'center',
        color: Colors.textColor,
        fontSize: 28,
    },

    AvatarDiv: {
        marginVertical: 20,
        borderRadius: 100,
        height: 200,
        width: 200,
        shadowColor: 'white',
        elevation: 20,
    },

    pointsSkill: {
        fontSize: 22,
        color: Colors.secondaryColor,
        textAlign: 'center',
    },

    divider: {
        height: 1,
        width: '80%',
        backgroundColor: Colors.textOpacity,
    },

    fotoAvatarDiv: {
        borderRadius: 100,
        borderWidth: 3,
        height: "100%",
        width: "100%",
        resizeMode: "cover",
    },
})