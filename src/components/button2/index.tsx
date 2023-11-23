import React from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  Image,
} from "react-native";
import { styles } from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ImgFlagButton from "../../assets/img/flagButton.png";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  icon?: string;
  irParaPagina?: any;
}

export function Button2({ title, irParaPagina, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={irParaPagina}>
      <Image source={ImgFlagButton} style={styles.Img} />
      <Text style={styles.text}>{ title }</Text>
    </TouchableOpacity>
  );
}
