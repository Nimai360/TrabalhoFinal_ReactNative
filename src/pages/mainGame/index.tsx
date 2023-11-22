import React, { useState, useEffect } from "react";
import { View, Image, Text, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import { GlobalStyles } from "../../global/styles";
import GoBackArrow from "../../components/goBackArrow";
import { Title_Subtitle } from "../../components/title_subtitle";
import ImgFlagButton from "../../assets/img/flagButton.png";
import { getMapaAPI } from "../../services/requestUser";

import { Button2 } from "../../components/button2";

var profileImageUri = {
    //   uri: "https://w.forfun.com/fetch/69/69ca02e5467bfb3cec2fef714845ac6b.jpeg",
  uri: "https://avatars.mds.yandex.net/get-mpic/5253050/img_id6703807053537370546.jpeg/14hq",
};

export default function MainGame() {
  const [mapa, setMapa] = useState([]);
  const [mapaAtual, setMapaAtual] = useState([]);

  useEffect(() => {
    loadMapa();
  }, []);

  function loadMapa() {
    getMapaAPI()
      .then((response) => {
        if (response !== null) {
          // console.log(response['mapas']);
          setMapa(response);
          setMapaAtual(response['mapas'][0]);
        } else {
          console.error("Usuário não encontrado");
        }
      })
      .catch((error) => {
        console.error("Erro inesperado:", error);
      });
  }

  return (
    <ImageBackground source={profileImageUri} style={GlobalStyles.backgroundImage}>
      <View style={GlobalStyles.containerImg}>
        <GoBackArrow />

        <Title_Subtitle
          title={`FASE ${mapaAtual['idMapa']}`}
          subtitle={mapaAtual['descriptionMapa']}
        />

        <Button2 title={mapaAtual['opcao1']['descriptionOpcao1']} irParaPagina={() => {}} />
        <Button2
          title={mapaAtual['opcao2']['descriptionOpcao2']}
          irParaPagina={() => {}}
        />
      </View>
    </ImageBackground>
  );
}
