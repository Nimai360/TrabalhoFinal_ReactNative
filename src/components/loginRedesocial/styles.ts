import { StyleSheet } from 'react-native';
import { Colors } from "../../global/styles";

export const styles = StyleSheet.create({
  loginContainer: {
    flexDirection: 'row',
    textAlign: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 30,
  },

  loginOption: {
    marginHorizontal: -8,
    flexDirection: 'row',
    gap: 15,
    textAlign: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },

  loginOptionTextLeftDiv: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },

  loginOptionTextRightDiv: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },

  loginOptionText: {
    color: Colors.textColor,
  },

  loginIconDiv: {
    backgroundColor: '#222222',
    height: 100,
    width: 100,
    borderRadius: 40,
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },

  loginIcon: {
    height: 95,
    width: 95,
    borderColor: Colors.secondaryColor,
    borderWidth: 1,
    borderRadius: 100,
    textAlign: 'center',
    fontSize: 44,
    paddingTop: '25%',
  },
})