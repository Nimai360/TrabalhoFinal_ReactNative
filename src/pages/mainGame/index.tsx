import React, { useState, useEffect } from "react";
import { View, ImageBackground } from "react-native";
import { GlobalStyles } from "../../global/styles";
import GoBackArrow from "../../components/goBackArrow";
import { Title_Subtitle } from "../../components/title_subtitle";
import { getMapaAPI, getUsuariosNoMapaAPI, putUsuarioAPI } from "../../services/requestUser";

import { Button2 } from "../../components/button2";
import { useCharacterContext } from "../../context/characterContext";

var profileImageUri = {
  //   uri: "https://w.forfun.com/fetch/69/69ca02e5467bfb3cec2fef714845ac6b.jpeg",
  uri: "https://avatars.mds.yandex.net/get-mpic/5253050/img_id6703807053537370546.jpeg/14hq",
};

export default function MainGame() {
  const [mapa, setMapa] = useState([]);
  const [mapaAtual, setMapaAtual] = useState([]);

  const { qtPontos, setQtPontos } = useCharacterContext();

  useEffect(() => {
    loadMapa();
  }, []);

  function loadMapa() {
    getMapaAPI()
      .then((response) => {
        if (response !== null) {
          // console.log(response['mapas']);
          setMapa(response['mapas']);
          // console.log(response['mapas']);
          setMapaAtual(response['mapas'][0]);
        } else {
          console.error("Usuário não encontrado");
        }
      })
      .catch((error) => {
        console.error("Erro inesperado:", error);
      });
  }

  function updateMapaAtual(opcaoEscolhida) {
    console.log(opcaoEscolhida)

    if (opcaoEscolhida['batalha'] != 'none') {
      if (opcaoEscolhida['batalha'] == 'facil') { }
      if (opcaoEscolhida['batalha'] == 'medio') { }

      if (opcaoEscolhida['batalha'] == 'dificil') {
        getUsuariosNoMapaAPI(mapaAtual['idMapa'])
        .then((response) => {
          if (response !== null) {
            console.log("length: " + (response.length) );
            console.log("passou");
            if (Array.isArray(response) && response.length < 2 ){

            } else {
              if (opcaoEscolhida['ganhaPontos']) {
                setQtPontos(qtPontos + 5);
              }
              const nextMapa = mapa.find(map => map.idMapa === opcaoEscolhida['idMapaParaOndeSeraLevado']);
              if (nextMapa) {
                setMapaAtual(nextMapa);
                putUsuarioAPI('nimai@nimai', true, opcaoEscolhida['idMapaParaOndeSeraLevado'])
              } else {
                console.error(`Map not found for idMapaParaOndeSeraLevado: ${opcaoEscolhida['idMapaParaOndeSeraLevado']}`);
              }
            }
          }
        })
        .catch((error) => {
          console.error("Erro inesperado:", error);
        });
      }
    } else {
      if (opcaoEscolhida['ganhaPontos']) {
        setQtPontos(qtPontos + 5);
      }
      const nextMapa = mapa.find(map => map.idMapa === opcaoEscolhida['idMapaParaOndeSeraLevado']);
      if (nextMapa) {
        setMapaAtual(nextMapa);
        putUsuarioAPI('nimai@nimai', true, opcaoEscolhida['idMapaParaOndeSeraLevado'])
      } else {
        console.error(`Map not found for idMapaParaOndeSeraLevado: ${opcaoEscolhida['idMapaParaOndeSeraLevado']}`);
      }
    }
  }

  return (
    <ImageBackground source={profileImageUri} style={GlobalStyles.backgroundImage}>
      <View style={GlobalStyles.containerImg}>
        <GoBackArrow />

        <Title_Subtitle
          title={`FASE ${mapaAtual['idMapa']}`}
          subtitle={mapaAtual['descriptionMapa']}
        />

        <Button2
          title={mapaAtual['opcao1'] ? mapaAtual['opcao1']['descriptionOpcao'] : ''}
          irParaPagina={() => updateMapaAtual(mapaAtual['opcao1'])}
        />
        <Button2
          title={mapaAtual['opcao2'] ? mapaAtual['opcao2']['descriptionOpcao'] : ''}
          irParaPagina={() => { updateMapaAtual(mapaAtual['opcao2']) }}
        />
      </View>
    </ImageBackground>
  );
}
