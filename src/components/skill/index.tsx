import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { GlobalStyles } from "../../global/styles";

interface skillProps {
  title: string;
  percent: string;
  points: number;
}

export default function Skill({ title, points, percent }: skillProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.descricao}>
        {title}: {points}
      </Text>

      <View style={styles.skillProgress}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnAddRemove}>-</Text>
        </TouchableOpacity>

        {/* 60% = 100% da barra */}
        <View style={styles.progressBarDiv}>
          <View
            style={[
              styles.progressBarBg,
              { width: "100%", position: "absolute" },
            ]}
          ></View>
          <View style={styles.progressBar} width={percent}></View>
        </View>

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnAddRemove}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
