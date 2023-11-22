import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from "../../global/styles";

export const styles = StyleSheet.create({
  card: {
    width: '95%',
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  snackbar:{
    

  },

  card2: {
    backgroundColor: Colors.coplementarPrimaryColor,
    width: '70%',
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: Colors.secondaryColor,
    shadowColor: Colors.secondaryColor,
    elevation: 20,
  },
})