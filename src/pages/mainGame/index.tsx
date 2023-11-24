import React, { useState, useEffect } from "react";
import { View, ImageBackground } from "react-native";
import { GlobalStyles } from "../../global/styles";
import GoBackArrow from "../../components/goBackArrow";
import { Title_Subtitle } from "../../components/title_subtitle";
import { getMapaAPI, getUsuariosNoMapaAPI, putUsuarioAPI } from "../../services/requestUser";

import { Button2 } from "../../components/button2";
import { useCharacterContext } from "../../context/characterContext";
import { getAsyncStorage, setAsyncStorage } from "../../services/asyncStorage";
import { Snackbar } from "react-native-paper";
import { styles } from "./styles";

var profileImageUri = {
  //   uri: "https://w.forfun.com/fetch/69/69ca02e5467bfb3cec2fef714845ac6b.jpeg",
  uri: "https://avatars.mds.yandex.net/get-mpic/5253050/img_id6703807053537370546.jpeg/14hq",
};

export default function MainGame() {
  const [mapa, setMapa] = useState([]);
  const [mapaAtual, setMapaAtual] = useState([]);
  const [faseAtual, setFaseAtual] = useState(1);
  const [snackVisible, setSnackVisible] = useState(false);
  const [snackVisibleDificl, setSnackVisibleDificl] = useState(false);

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
              const numeroDeElementos = Object.keys(response).length;

              if (numeroDeElementos < 2) {
                setSnackVisibleDificl(true);
              } else {
                proximoMapa(opcaoEscolhida);
              }
            }
          })
          .catch((error) => {
            console.error("Erro inesperado:", error);
          });
      }
    } else {
      proximoMapa(opcaoEscolhida);
    }
  }

  function proximoMapa(opcaoEscolhida){
    var pontos = 0
    if (opcaoEscolhida['ganhaPontos']) {
      setSnackVisible(true);
      pontos = qtPontos + 5
      setQtPontos(pontos);
    }
    const nextMapa = mapa.find(map => map.idMapa === opcaoEscolhida['idMapaParaOndeSeraLevado']);
    if (nextMapa) {
      setFaseAtual(faseAtual + 1);
      setMapaAtual(nextMapa);

      getAsyncStorage('user')
        .then(value => {
          var usuario = JSON.parse(value + '')
          putUsuarioAPI(usuario['email'], true, opcaoEscolhida['idMapaParaOndeSeraLevado'])
          setAsyncStorage(`${usuario['email']}-Pontos`, pontos);
        })
        .catch(e => console.error('Erro ao recuperar os dados:', e));


    } else {
      // console.error(`Map not found for idMapaParaOndeSeraLevado: ${opcaoEscolhida['idMapaParaOndeSeraLevado']}`);
    }
  }



  return (
    <ImageBackground source={profileImageUri} style={GlobalStyles.backgroundImage}>
      <View style={GlobalStyles.containerImg}>
        <GoBackArrow />

        <Title_Subtitle
          title={`Mapa ${faseAtual}`}
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
      <Snackbar
        visible={snackVisible}
        duration={5000}
        onDismiss={() => setSnackVisible(false)}
        style={styles.snackbar}
        action={{
          label: 'X',
          onPress: () => {
            // Do something
            setSnackVisible(false)
          },
        }}>
        Parabéns, aventureiro! Sua bravura lhe fez ganhar 5 pontos para usar em suas Skills!
      </Snackbar>
      <Snackbar
        visible={snackVisibleDificl}
        duration={5000}
        onDismiss={() => setSnackVisible(false)}
        style={styles.snackbar}
        action={{
          label: 'X',
          onPress: () => {
            // Do something
            setSnackVisible(false)
          },
        }}>
        Caro aventureiro, este mapa é muito difícil pro seu nível. Aguarde mais alguém chegar neste mapa.
      </Snackbar>
    </ImageBackground>
  );
}
