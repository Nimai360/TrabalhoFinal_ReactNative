import React, { useState } from "react";
import { Text } from "react-native";
import { styles } from "./styles";
import { Snackbar } from "react-native-paper";

interface TitleProps {
  title: string;
  subtitle?: string;
}

export function Title_Subtitle({ title, subtitle = "" }: TitleProps) {
  return (
    <>
      <Text style={styles.title}>{title}</Text>
      {subtitle && <Text style={styles.subTitle}>{subtitle}</Text>}
    </>
  );
}
