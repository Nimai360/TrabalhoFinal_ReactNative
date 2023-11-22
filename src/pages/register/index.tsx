import React from "react";
import { View, ImageBackground } from "react-native";
import { styles } from "./styles";
import { GlobalStyles } from "../../global/styles";
import { useNavigation } from "@react-navigation/native";
import { Button } from "../../components/button";
import { TextoInput } from "../../components/textInput";
import { Title_Subtitle } from "../../components/title_subtitle";
import { Rodape_link } from "../../components/rodape_link";

var profileImageUri = {
  uri: "https://w.forfun.com/fetch/69/69ca02e5467bfb3cec2fef714845ac6b.jpeg",
};

export default function Register() {
  
  const navigation = useNavigation();
  function handleRegister() {
    navigation.navigate("StackLogin");
  }

  function handleWaitScreen() {
    navigation.navigate("StackWaitScreen");
  }

  return (
    <ImageBackground source={profileImageUri} style={styles.backgroundImage}>
      <View style={GlobalStyles.container}>
        <View style={styles.card}>
          <Title_Subtitle
            title="Vamos criar seu avatar!"
            subtitle="Criando..."
          />

          <TextoInput placeholder="Usuário" type="user" icon="shield-account" />
          <TextoInput placeholder="E-mail" type="user" icon="shield-star" />
          <TextoInput placeholder="Senha" type="password" />
          <Button icon="sword" title="Cadastrar" irParaPagina={handleWaitScreen} />
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
