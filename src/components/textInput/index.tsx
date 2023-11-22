import React, { useState, useEffect } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface TextInputProps {
  placeholder: string;
  type: "password" | "user" | "email" | "";
  icon?: string;
}

export function TextoInput({
  placeholder,
  type = "",
  icon,
  ...rest
}: TextInputProps) {
  const [passwordVisible, setPasswordVisible] = useState(false);

  useEffect(() => {
    if (type == "password") {
      setPasswordVisible(true);
    }
  }, []);

  return (
    <View style={styles.InputContainer}>
      {type === "password" && (
        <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
          <MaterialCommunityIcons
            style={styles.iconInput}
            name={passwordVisible ? "shield-lock" : "shield-lock-open"}
          />
        </TouchableOpacity>
      )}
      {type != "password" && icon && (
        <TouchableOpacity>
          <MaterialCommunityIcons style={styles.iconInput} name={icon} />
        </TouchableOpacity>
      )}

      <TextInput
        style={styles.input}
        secureTextEntry={passwordVisible}
        placeholder={placeholder}
        placeholderTextColor="#ffffff21"
      ></TextInput>
    </View>
  );
}
