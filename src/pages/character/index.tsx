import { View, Text, ScrollView, Image } from "react-native";
import { styles } from "./styles";
import { GlobalStyles } from "../../global/styles";
import Skill from "../../components/skill";
import React from "react";

var profileImageUri = {
  //   uri: "https://w.forfun.com/fetch/69/69ca02e5467bfb3cec2fef714845ac6b.jpeg",
  uri: "https://avatars.mds.yandex.net/get-mpic/5253050/img_id6703807053537370546.jpeg/14hq",
};

export default function Character() {
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
