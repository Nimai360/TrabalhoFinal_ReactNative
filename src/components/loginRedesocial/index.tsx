import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { FontAwesome } from "@expo/vector-icons";
import { Colors } from "../../global/styles";

export function LoginRedeSocial() {
  return (
    <View style={styles.loginContainer}>
      <View style={styles.loginOption}>
        <View style={styles.loginOptionTextLeftDiv}>
          <Text style={styles.loginOptionText}>LOGIN WITH</Text>
          <Text style={{ color: Colors.FacebookColor }}>FACEBOOK</Text>
        </View>

        <View style={styles.loginIconDiv}>
          <TouchableOpacity>
            <FontAwesome
              style={styles.loginIcon}
              color={Colors.FacebookColor}
              name="facebook"
            />
          </TouchableOpacity>
        </View>
      </View>

      
      <View style={styles.loginOption}>
        <View style={styles.loginIconDiv}>
          <TouchableOpacity>
            <FontAwesome
              style={styles.loginIcon}
              color={Colors.TwitterColor}
              name="twitter"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.loginOptionTextRightDiv}>
          <Text style={styles.loginOptionText}>LOGIN WITH</Text>
          <Text style={{ color: Colors.TwitterColor }}>TWITTER</Text>
        </View>
      </View>
    </View>
  );
}
