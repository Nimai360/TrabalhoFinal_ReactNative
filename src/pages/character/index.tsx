import React, { useEffect, useRef, useState } from "react";
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
  const qtForcaRef = useRef();
  const qtStaminaRef = useRef();
  const qtDefesaRef = useRef();
  const qtVelocidadeRef = useRef();
  const qtDestrezaRef = useRef();
  const qtMagiaRef = useRef();
  const qtSorteRef = useRef();
  const qtInteligenciaRef = useRef();
  const qtTotalRef = useRef();
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
        const parsedValue = JSON.parse(value + '');
        setUser(parsedValue);

        setUserSkillsPoints(parsedValue['email']);
        return loadUserPointsFromAsync(parsedValue['email']);
      })
      .then(points => {
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
        const parsedValue = JSON.parse(value + '');
        // console.log('ContextPoints - ' + parsedValue);
        setQtPontos(Number(parsedValue));
        // setAsyncStorage(`${email}-Pontos`, Number(parsedValue));

        return parsedValue;
      })
      .catch(e => {
        console.error('ContextPoints - Erro ao recuperar os dados:', e);
        throw e; // Propagar o erro para que seja tratado externamente, se necessário
      });
  }

  async function saveUserPoints() {
    var skills = {
      qtForca: qtForcaRef.current,
      qtStamina: qtStaminaRef.current,
      qtDefesa: qtDefesaRef.current,
      qtVelocidade: qtVelocidadeRef.current,
      qtDestreza: qtDestrezaRef.current,
      qtMagia: qtMagiaRef.current,
      qtSorte: qtSorteRef.current,
      qtInteligencia: qtInteligenciaRef.current,
      qtTotal: qtTotalRef.current,
    }
    await setAsyncStorage(`${user['email']}-Pontos-Skills`, skills);
    console.log(skills);
    console.log("skills salvas");
  }

  async function setUserSkillsPoints(email: string) {
    await getAsyncStorage(`${email}-Pontos-Skills`)
      .then(dadosObj => {
        var dados = JSON.parse(dadosObj + '');
        var add = false;
        if (dados['qtForca']) {
          setQtForca(dados['qtForca']);
          add = true;
        } else {
          setQtForca(0);
        }

        if (dados['qtStamina']) {
          setQtStamina(dados['qtStamina']);
          add = true;
        } else {
          setQtStamina(0);
        }

        if (dados['qtDefesa']) {
          setQtDefesa(dados['qtDefesa']);
          add = true;
        } else {
          setQtDefesa(0);
        }

        if (dados['qtVelocidade']) {
          setQtVelocidade(dados['qtVelocidade']);
          add = true;
        } else {
          setQtVelocidade(0);
        }

        if (dados['qtDestreza']) {
          setQtDestreza(dados['qtDestreza']);
          add = true;
        } else {
          setQtDestreza(0);
        }

        if (dados['qtMagia']) {
          setQtMagia(dados['qtMagia']);
          add = true;
        } else {
          setQtMagia(0);
        }

        if (dados['qtSorte']) {
          setQtSorte(dados['qtSorte']);
          add = true;
        } else {
          setQtSorte(0);
        }

        if (dados['qtInteligencia']) {
          setQtInteligencia(dados['qtInteligencia']);
          add = true;
        } else {
          setQtInteligencia(0);
        }

        if (dados['qtTotal']) {
          setQtTotal(dados['qtTotal']);
          add = true;
        } else {
          setQtTotal(0);
        }

        if (add) {
          console.log("Skills recuperadas");
        } else {
          console.log("nenhuma skill para recuperar");
        }
      })
      .catch(e => {
        console.error('Character - Erro ao recuperar os dados:', e);
        throw e; // Propagar o erro para que seja tratado externamente, se necessário
      });
  }

  function somarTotal() {
    var total = qtForca + qtStamina + qtDefesa + qtVelocidade + qtDestreza + qtMagia + qtSorte + qtInteligencia + qtPontos
    setQtTotal(total);
    setQtTotal(oldQt => {
        const newQt = oldQt;
        qtTotalRef.current = newQt;
        return newQt;
      });
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

  function onHandlerQtForca(op: string) {
    if (op == 'add') {
      setQtForca(oldQt => {
        const newQt = oldQt + 1;
        qtForcaRef.current = newQt;
        return newQt;
      });
    } else if (op == "sub") {
      setQtForca(oldQt => {
        const newQt = oldQt - 1;
        qtForcaRef.current = newQt;
        return newQt;
      });
    }
    saveUserPoints();
  }

  function onHandlerQtStamina(op: string) {
    if (op == 'add') {
      setQtStamina(oldQt => {
        const newQt = oldQt + 1;
        qtStaminaRef.current = newQt;
        return newQt;
      });
    } else if (op == "sub") {
      // setQtStamina(qtStamina - 1)
      setQtStamina(oldQt => {
      const newQt = oldQt - 1;
        qtStaminaRef.current = newQt;
        return newQt;
      });
    }
    saveUserPoints();
  }

  function onHandlerQtDefesa(op: string) {
    if (op == 'add') {
      setQtDefesa(oldQt => {
        const newQt = oldQt + 1;
        qtDefesaRef.current = newQt;
        return newQt;
      });
    } else if (op == "sub") {
      setQtDefesa(oldQt => {
        const newQt = oldQt - 1;
        qtDefesaRef.current = newQt;
        return newQt;
      });
    }
    saveUserPoints();
  }

  function onHandlerQtVelocidade(op: string) {
    if (op == 'add') {
      setQtVelocidade(oldQt => {
        const newQt = oldQt + 1;
        qtVelocidadeRef.current = newQt;
        return newQt;
      });
    } else if (op == "sub") {
      setQtVelocidade(oldQt => {
        const newQt = oldQt - 1;
        qtVelocidadeRef.current = newQt;
        return newQt;
      });
    }
    saveUserPoints();
  }

  function onHandlerQtDestreza(op: string) {
    if (op == 'add') {
      setQtDestreza(oldQt => {
        const newQt = oldQt + 1;
        qtDestrezaRef.current = newQt;
        return newQt;
      });
    } else if (op == "sub") {
      setQtDestreza(oldQt => {
        const newQt = oldQt - 1;
        qtDestrezaRef.current = newQt;
        return newQt;
      });
    }
    saveUserPoints();
  }

  function onHandlerQtMagia(op: string) {
    if (op == 'add') {
      setQtMagia(oldQt => {
        const newQt = oldQt + 1;
        qtMagiaRef.current = newQt;
        return newQt;
      });
    } else if (op == "sub") {
      setQtMagia(oldQt => {
        const newQt = oldQt - 1;
        qtMagiaRef.current = newQt;
        return newQt;
      });
    }
    saveUserPoints();
  }

  function onHandlerQtSorte(op: string) {
    if (op == 'add') {
      setQtSorte(oldQt => {
        const newQt = oldQt + 1;
        qtSorteRef.current = newQt;
        return newQt;
      });
    } else if (op == "sub") {
      setQtSorte(oldQt => {
        const newQt = oldQt - 1;
        qtSorteRef.current = newQt;
        return newQt;
      });
    }
    saveUserPoints();
  }

  function onHandlerQtInteligencia(op: string) {
    if (op == 'add') {
      setQtInteligencia(oldQt => {
        const newQt = oldQt + 1;
        qtInteligenciaRef.current = newQt;
        return newQt;
      });
    } else if (op == "sub") {
      setQtInteligencia(oldQt => {
        const newQt = oldQt - 1;
        qtInteligenciaRef.current = newQt;
        return newQt;
      });
    }
    saveUserPoints();
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
        <Skill title="Força" percent={(qtForca / qtTotal * 100) + "%"} points={qtForca} alterPoint={onHandlerQtForca} />
        <Skill title="Stamina" percent={(qtStamina / qtTotal * 100) + "%"} points={qtStamina} alterPoint={onHandlerQtStamina} />
        <Skill title="Defesa" percent={(qtDefesa / qtTotal * 100) + "%"} points={qtDefesa} alterPoint={onHandlerQtDefesa} />
        <Skill title="Velocidade" percent={(qtVelocidade / qtTotal * 100) + "%"} points={qtVelocidade} alterPoint={onHandlerQtVelocidade} />
        <Skill title="Destreza" percent={(qtDestreza / qtTotal * 100) + "%"} points={qtDestreza} alterPoint={onHandlerQtDestreza} />
        <Skill title="Magia" percent={(qtMagia / qtTotal * 100) + "%"} points={qtMagia} alterPoint={onHandlerQtMagia} />
        <Skill title="Sorte" percent={(qtSorte / qtTotal * 100) + "%"} points={qtSorte} alterPoint={onHandlerQtSorte} />
        <Skill title="Inteligencia" percent={(qtInteligencia / qtTotal * 100) + "%"} points={qtInteligencia} alterPoint={onHandlerQtInteligencia} />
      </ScrollView>
    </View>
  );
}
