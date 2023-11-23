import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { GlobalStyles } from "../../global/styles";
import { useCharacterContext } from "../../context/characterContext";

interface skillProps {
  title: string;
  percent: string;
  points: number;
}

export default function Skill({ title, points, percent }: skillProps) {
    const { qtPontos, setQtPontos } = useCharacterContext();

  const addPoint = () => {
    if (qtPontos > 0) {
      setQtPontos(qtPontos - 1);
    }
  };

  const removePoint = () => {
    if (qtPontos < 100) {
      setQtPontos(qtPontos + 1);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.descricao}>
        {title}: {points}
      </Text>

      <View style={styles.skillProgress}>
        <TouchableOpacity style={styles.btn} onPress={addPoint}>
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

        <TouchableOpacity style={styles.btn} onPress={removePoint}>
          <Text style={styles.btnAddRemove}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
