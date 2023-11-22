import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

interface Rodape_linkProps {
  text: string;
  link: string;
  irParaPagina: any;
}

export function Rodape_link({ text, link, irParaPagina}: Rodape_linkProps) {
  return (
    <>
      <View style={styles.registerContainer}>
        <Text style={styles.register}>{ text }</Text>
        <TouchableOpacity>
          <Text style={styles.link} onPress={irParaPagina}>
            { link }
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
