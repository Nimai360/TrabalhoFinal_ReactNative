import React from "react";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";

export default function GoBackArrow() {
  const navigation = useNavigation();
  
  return (
    <>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.container}
      >
        <MaterialIcons name="keyboard-arrow-left" style={styles.arrow} />
      </TouchableOpacity>
    </>
  );
}
