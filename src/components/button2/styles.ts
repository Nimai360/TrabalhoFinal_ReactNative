import { StyleSheet, Dimensions } from 'react-native';
import { Colors, ScreenDimensions } from "../../global/styles";

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        height: 120,
        marginTop: 30,
    },

    text: {
        position: 'absolute',
        textAlign: 'center',
        paddingHorizontal: 55,
        // fontSize: 24,
        fontSize: 20,
        // fontWeight: 'bold',
        color: Colors.primaryColor,
    },

    Img: {
        height: '100%',
        width: ScreenDimensions.width * 0.85,
        resizeMode: "stretch",
    },
})