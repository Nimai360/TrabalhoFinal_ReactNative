import { StyleSheet } from 'react-native';
import { Colors } from "../../global/styles";

export const styles = StyleSheet.create({
    container: {
        width: 250,        
        paddingVertical: 16,        
       },
       dropdown: {
        height: 50,
        borderColor: Colors.textOpacity,
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
        //backgroundColor: 'Colors.coplementarPrimaryColor', 
               
       },
       placeholderStyle: { //texto do título do input no placeholder
        color: Colors.textOpacity,
        fontSize: 20,
       },

       selectedTextStyle: { //texto do item selecionado no input
        color: '#fff',
        fontSize: 20,
        },

        listContainerStyle: {    //container da lista dos itens       
            backgroundColor: Colors.coplementarPrimaryColor, 
            borderRadius: 8,
            borderColor: Colors.textOpacity
        },

        itemTextStyle: { //texto da lista dos itens
            color: '#fff',
            fontSize: 20,
        },
        itemContainerStyle: { //backgroundColor do item selecionado na lista do container
            backgroundColor: Colors.coplementarPrimaryColor,
        }
   
 })