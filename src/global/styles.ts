import { StyleSheet, Dimensions } from 'react-native';

export const Colors = {
  primaryColor: '#222222',
  // primaryColor: 'rgba(34,34,34,0.96)',
  overlay: 'rgba(34,34,34,0.93)',
  coplementarPrimaryColor: '#1a1b1d',
  secondaryColor: '#a674f7',
  textColor: '#fff',
  textOpacity: 'rgba(255, 255, 255, 0.2)',
  FacebookColor: '#4380ec',
  TwitterColor: '#00b9f2',
};

export const ScreenDimensions = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
}

export const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryColor,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },

  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },

  containerImg: {
    flex: 1, 
    paddingHorizontal: 30,
    // backgroundColor: primaryColor,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.overlay,
  },
})