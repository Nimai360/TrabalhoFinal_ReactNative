import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { styles } from "./styles";

const data = [
 { label: 'Item 1', value: '1' },
 { label: 'Item 2', value: '2' },
 { label: 'Item 3', value: '3' },
];

const DropdownComponent = () => {
 const [value, setValue] = useState(null);
 const [data, setData] = useState([]);//

 //
 useEffect(() => {
    fetch('http://bots2.me/_botsConfig/serratec/react_native/characters.json')
      .then(response => response.json())
      .then(data => {
        const newData = Object.keys(data).map(key => ({ label: key, value: key }));
        setData(newData);
      });
   }, []);

 return (
   <View style={styles.container}>
     <Dropdown
        mode='modal'
       style={styles.dropdown}
       placeholderStyle={styles.placeholderStyle} //texto do título do input no placeholder
       selectedTextStyle={styles.selectedTextStyle} //texto do item selecionado no input
       containerStyle={styles.listContainerStyle} //container da lista dos itens  
       itemTextStyle={styles.itemTextStyle} //texto da lista dos itens
       activeColor={styles.itemContainerStyle} //backgroundColor do item selecionado na lista do container
       data={data}
       labelField="label"
       valueField="value"
       placeholder="Selecione a categoria"
       value={value}
       onChange={item => setValue(item.value)}
     />
   </View>
 );
};

export default DropdownComponent;
