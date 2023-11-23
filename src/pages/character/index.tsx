import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { styles } from "./styles";
import { GlobalStyles } from "../../global/styles";
import Skill from "../../components/skill";
import { getFotoPersonagensAPI } from "../../services/requestUser";
import { getAsyncStorage, setAsyncStorage } from "../../services/asyncStorage";
import { useCharacterContext } from "../../context/characterContext";

export default function Character() {
  const [profileImageUri, setProfileImageUri] = useState({ uri: "" });
  const [user, setUser] = useState({});
  const [qtForca, setQtForca] = useState(0);
  const [qtStamina, setQtStamina] = useState(0);
  const [qtDefesa, setQtDefesa] = useState(0);
  const [qtVelocidade, setQtVelocidade] = useState(0);
  const [qtDestreza, setQtDestreza] = useState(0);
  const [qtMagia, setQtMagia] = useState(0);
  const [qtSorte, setQtSorte] = useState(0);
  const [qtInteligencia, setQtInteligencia] = useState(0);
  const [qtTotal, setQtTotal] = useState(0);


  const { qtPontos, setQtPontos } = useCharacterContext();

  useEffect(() => {
    loadUserFromAsync();
    loadFoto();
    somarTotal();
  }, []);

  useEffect(() => {
    somarTotal();
    // loadUserFromAsync();
  }, [qtPontos]);

  function loadUserFromAsync() {
    return getAsyncStorage("user")
        .then(value => {
            value = value + '';
            const parsedValue = JSON.parse(value);
            setUser(parsedValue);

            return loadUserPointsFromAsync(parsedValue['email']);
        })
        .then(points => {
            // console.log('points: ' + points);
            return points;
        })
        .catch(e => {
            console.error('ContextUser - Erro ao recuperar os dados:', e);
            throw e; // Propagar o erro para que seja tratado externamente, se necessário
        });
}

function loadUserPointsFromAsync(email) {
    return getAsyncStorage(`${email}-Pontos`)
        .then(value => {
            value = value + '';
            const parsedValue = JSON.parse(value);
            // console.log('ContextPoints - ' + parsedValue);
            setQtPontos(Number(parsedValue));
            setAsyncStorage(`${email}-Pontos`, Number(parsedValue));

            return parsedValue;
        })
        .catch(e => {
            console.error('ContextPoints - Erro ao recuperar os dados:', e);
            throw e; // Propagar o erro para que seja tratado externamente, se necessário
        });
}

  function somarTotal(){
    var total = qtForca + qtStamina + qtDefesa + qtVelocidade + qtDestreza + qtMagia + qtSorte + qtInteligencia + qtPontos
    setQtTotal(total);
  }

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
  // function loadUserFromAsync() {
  //   getAsyncStorage("user")
  //     .then(value => {
  //       value = value+'';
  //       var parsedValue = JSON.parse(value);
  
  //       setUser(parsedValue);
  //     })
  //     .catch(e => console.error('Erro ao recuperar os dados:', e));
  // }

  function onHandlerQtForca(op: string){
    if(op == 'add'){
      setQtForca(qtForca + 1)
    } else if (op == "sub"){
      setQtForca(qtForca - 1)
    }
  }

    function onHandlerQtStamina(op: string){
    if(op == 'add'){
      setQtStamina(qtStamina + 1)
    } else if (op == "sub"){
      setQtStamina(qtStamina - 1)
    }
  }

  function onHandlerQtDefesa(op: string){
    if(op == 'add'){
      setQtDefesa(qtDefesa + 1)
    } else if (op == "sub"){
      setQtDefesa(qtDefesa - 1)
    }
  }

  function onHandlerQtVelocidade(op: string){
    if(op == 'add'){
      setQtVelocidade(qtVelocidade + 1)
    } else if (op == "sub"){
      setQtVelocidade(qtVelocidade - 1)
    }
  }

  function onHandlerQtDestreza(op: string){
    if(op == 'add'){
      setQtDestreza(qtDestreza + 1)
    } else if (op == "sub"){
      setQtDestreza(qtDestreza - 1)
    }
  }

  function onHandlerQtMagia(op: string){
    if(op == 'add'){
      setQtMagia(qtMagia + 1)
    } else if (op == "sub"){
      setQtMagia(qtMagia - 1)
    }
  }

  function onHandlerQtSorte(op: string){
    if(op == 'add'){
      setQtSorte(qtSorte + 1)
    } else if (op == "sub"){
      setQtSorte(qtSorte - 1)
    }
  }

  function onHandlerQtInteligencia(op: string){
    if(op == 'add'){
      setQtInteligencia(qtInteligencia + 1)
    } else if (op == "sub"){
      setQtInteligencia(qtInteligencia - 1)
    }
  }

  return (
    <View style={GlobalStyles.container}>
      <View style={styles.container}>
        <View style={styles.AvatarDiv}>
          <Image style={styles.fotoAvatarDiv} source={profileImageUri} />
        </View>
        <Text style={styles.title}>{user['username']}</Text>
        <Text style={styles.pointsSkill}>{qtPontos}</Text>
      </View>
      <View style={styles.divider}></View>

      <ScrollView
        style={styles.containerScroll}
        showsVerticalScrollIndicator={false}
      >
        <Skill title="Força" percent={(qtForca/qtTotal * 100) + "%"} points={qtForca} alterPoint={onHandlerQtForca} />
        <Skill title="Stamina" percent={(qtStamina/qtTotal * 100) + "%"} points={qtStamina} alterPoint={onHandlerQtStamina} />
        <Skill title="Defesa" percent={(qtDefesa/qtTotal * 100) + "%"}points={qtDefesa} alterPoint={onHandlerQtDefesa} />
        <Skill title="Velocidade" percent={(qtVelocidade/qtTotal * 100) + "%"} points={qtVelocidade} alterPoint={onHandlerQtVelocidade} />
        <Skill title="Destreza" percent={(qtDestreza/qtTotal * 100) + "%"} points={qtDestreza} alterPoint={onHandlerQtDestreza} />
        <Skill title="Magia" percent={(qtMagia/qtTotal * 100) + "%"}points={qtMagia} alterPoint={onHandlerQtMagia} />
        <Skill title="Sorte" percent={(qtSorte/qtTotal * 100) + "%"} points={qtSorte} alterPoint={onHandlerQtSorte} />
        <Skill title="Inteligencia" percent={(qtInteligencia/qtTotal * 100) + "%"} points={qtInteligencia} alterPoint={onHandlerQtInteligencia} />
      </ScrollView>
    </View>
  );
}
