import React, { useState, useEffect } from "react";
import { View, Image, Text, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import { GlobalStyles } from "../../global/styles";
import GoBackArrow from "../../components/goBackArrow";
import { Title_Subtitle } from "../../components/title_subtitle";

import ImgFlagButton from "../../assets/img/flagButton.png";

import { Button2 } from "../../components/button2";

var profileImageUri = {
    //   uri: "https://w.forfun.com/fetch/69/69ca02e5467bfb3cec2fef714845ac6b.jpeg",
  uri: "https://avatars.mds.yandex.net/get-mpic/5253050/img_id6703807053537370546.jpeg/14hq",
};

export default function MainGame() {
  return (
    <ImageBackground source={profileImageUri} style={GlobalStyles.backgroundImage}>
      <View style={GlobalStyles.containerImg}>
        <GoBackArrow />

        <Title_Subtitle
          title={"FASE 1"}
          subtitle="Você acordou em uma floresta escura, totalmente desorientado. A sua frente tem uma floresta para se aventurar e ao seu lado uns gravetos."
        />

        <Button2 title="Siga floresta a dentro" irParaPagina={() => {}} />
        <Button2
          title="Faça um arco e flecha com os gravetos"
          irParaPagina={() => {}}
        />
      </View>
    </ImageBackground>
  );
}
