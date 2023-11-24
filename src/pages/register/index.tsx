import React, { useState } from "react";
import { View, ImageBackground } from "react-native";
import { styles } from "./styles";
import { GlobalStyles } from "../../global/styles";
import { useNavigation } from "@react-navigation/native";
import { Button } from "../../components/button";
import { TextoInput } from "../../components/textInput";
import { Title_Subtitle } from "../../components/title_subtitle";
import { Rodape_link } from "../../components/rodape_link";
import { postUsuarioAPI } from "../../services/requestUser";
import { setAsyncStorage } from "../../services/asyncStorage";

var profileImageUri = {
  uri: "https://w.forfun.com/fetch/69/69ca02e5467bfb3cec2fef714845ac6b.jpeg",
};

export default function Register() {
  const [usuario, setUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const navigation = useNavigation();
  function handleRegister() {
    navigation.navigate("StackLogin");
  }

  function handleWaitScreen(usuario: string, email: string, senha: string) {
    if (usuario != "" && email != "" && senha != "") {
      postUsuarioAPI(usuario, email, senha)
        .then((response) => {
          if (response !== null) {
            setAsyncStorage("user", response);
            setAsyncStorage(`${email}-Pontos`, 10);
            navigation.navigate("StackMainGame");
          } else {
            console.error("Erro ao entrar no jogo");
          }
        })
        .catch((error) => {
          console.error("Erro inesperado:", error);
        })
        .finally(() => {
          loadUserPointsFromAsync(email);
        });
    }
  }

  return (
    <ImageBackground source={profileImageUri} style={styles.backgroundImage}>
      <View style={GlobalStyles.container}>
        <View style={styles.card}>
          <Title_Subtitle
            title="Vamos criar seu avatar!"
            subtitle="Criando..."
          />

          <TextoInput
            placeholder="Usuário"
            type="user"
            icon="shield-account"
            onChangeText={(text) => setUsuario(text)}
          />
          <TextoInput
            placeholder="E-mail"
            type="user"
            icon="shield-star"
            onChangeText={(text) => setEmail(text)}
          />
          <TextoInput
            placeholder="Senha"
            type="password"
            onChangeText={(text) => setSenha(text)}
          />
          <Button
            icon="sword"
            title="Cadastrar"
            irParaPagina={() => handleWaitScreen(usuario, email, senha)}
          />
        </View>
        <Rodape_link
          text="Já possui conta?"
          link="Logar"
          irParaPagina={handleRegister}
        />
      </View>
    </ImageBackground>
  );
}
function loadUserPointsFromAsync(email: string) {
  throw new Error("Function not implemented.");
}
