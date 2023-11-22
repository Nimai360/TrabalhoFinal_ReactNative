import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { styles } from "./styles";
import { GlobalStyles } from "../../global/styles";
import Skill from "../../components/skill";
import { getFotoPersonagensAPI } from "../../services/requestUser";

export default function Character() {
  const [profileImageUri, setProfileImageUri] = useState({ uri: "" });

  useEffect(() => {
    loadFoto();
  }, []);

  function loadFoto() {
    getFotoPersonagensAPI()
      .then((response) => {
        if (response !== null) {
          setProfileImageUri({ uri: response["ladrao"] });
        } else {
          console.error("Usuário não encontrado");
        }
      })
      .catch((error) => {
        console.error("Erro inesperado:", error);
      });
  }

  return (
    <View style={GlobalStyles.container}>
      <View style={styles.container}>
        <View style={styles.AvatarDiv}>
          <Image style={styles.fotoAvatarDiv} source={profileImageUri} />
        </View>
        <Text style={styles.title}>CAPYBARA</Text>
        <Text style={styles.pointsSkill}>100</Text>
      </View>
      <View style={styles.divider}></View>

      <ScrollView
        style={styles.containerScroll}
        showsVerticalScrollIndicator={false}
      >
        <Skill title="Força" percent="50%" points={50} />
        <Skill title="Stamina" percent="20%" points={20} />
        <Skill title="Defesa" percent="10%" points={10} />
        <Skill title="Velocidade" percent="3%" points={3} />
        <Skill title="Destreza" percent="5%" points={5} />
        <Skill title="Magia" percent="7%" points={7} />
        <Skill title="Sorte" percent="3%" points={3} />
        <Skill title="Inteligencia" percent="2%" points={2} />
      </ScrollView>
    </View>
  );
}
