import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from "../../global/styles";

export const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: 0,
        left: 0,
    },

    arrow: {
        fontSize: 25,
        color: Colors.textColor,
        paddingLeft: 10,
        paddingTop: 10,
    }
})