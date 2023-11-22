import React from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  TextInput,
  View,
} from "react-native";
import { styles } from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  icon?: string;
  irParaPagina: any;
}

export function Button({ icon, title, irParaPagina, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={irParaPagina}>
      <MaterialCommunityIcons name={icon} style={styles.icon} />
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}
