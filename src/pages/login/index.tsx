import React, { useState } from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { GlobalStyles } from "../../global/styles";
import { useNavigation } from "@react-navigation/native";
import { Button } from "../../components/button";
import { Button2 } from "../../components/button2";
import { TextoInput } from "../../components/textInput";
import { Title_Subtitle } from "../../components/title_subtitle";
import { Rodape_link } from "../../components/rodape_link";
import { LoginRedeSocial } from "../../components/loginRedesocial";
import { Snackbar } from "react-native-paper";
import { getAsyncStorage, setAsyncStorage } from "../../services/asyncStorage";
import { getUsuarioAPI } from "../../services/requestUser";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const navigation = useNavigation();

  function handleRegister() {
    navigation.navigate("StackRegister");
  }

  function loadUserPointsFromAsync(email) {
    getAsyncStorage(`${email}-Pontos`)
      .then((value) => {
        value = value + "";
        var parsedValue = JSON.parse(value);
        // console.log(parsedValue);

        if (parsedValue == undefined || parsedValue == null) {
          console.log("Pontos são undefined");
          // setAsyncStorage(`${email}-Pontos`, 10);
        }

        return parsedValue;
      })
      .catch((e) => console.error("login - Erro ao recuperar os dados:", e));
  }

  function handleWaitScreen(email: string, senha: string) {
    // email = "nimai@nimai";
    // senha = "123456";
    if (email != "" && senha != "") {
      getUsuarioAPI(email, senha)
        .then((response) => {
          console.log(response);
          if (response !== null) {
            setAsyncStorage("user", response);
            loadUserPointsFromAsync(email);

            navigation.navigate("StackMainGame");
          } else {
            console.error("Usuário não encontrado");
          }
        })
        .catch((error) => {
          console.error("Erro inesperado:", error);
        });
    }
  }

  return (
    <View style={GlobalStyles.container}>
      <View style={styles.card}>
        <Title_Subtitle
          title="Seja bem-vindo(a) a Grande Aventura"
          subtitle="Vamos começar?"
        />

        <LoginRedeSocial />

        <TextoInput
          placeholder="Usuário"
          type="user"
          icon="shield-account"
          onChangeText={(text) => setEmail(text)}
        />
        <TextoInput
          placeholder="Senha"
          type="password"
          onChangeText={(text) => setSenha(text)}
        />

        <Button
          icon="sword"
          title="Entrar"
          irParaPagina={() => handleWaitScreen(email, senha)}
        />

        {/* <Button2 title="Entrar" irParaPagina={handleEnterGame} /> */}
      </View>

      <Rodape_link
        text="Não possui conta?"
        link="Registre-se"
        irParaPagina={handleRegister}
      />
    </View>
  );
}
