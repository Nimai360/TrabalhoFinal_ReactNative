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

export default function Login() {
  const navigation = useNavigation();

  function handleRegister() {
    navigation.navigate("StackRegister");
  }

  function handleEnterGame() {
    // navigation.navigate("StackWaitScreen");
    navigation.navigate("StackMainGame");
  }

  return (
    <View style={GlobalStyles.container}>
      <View style={styles.card}>
        <Title_Subtitle
          title="Seja bem-vindo(a) a Grande Aventura"
          subtitle="Vamos começar?"
        />

        <LoginRedeSocial />

        <TextoInput placeholder="Usuário" type="user" icon="shield-account" />
        <TextoInput placeholder="Senha" type="password" />

        <Button icon="sword" title="Entrar" irParaPagina={handleEnterGame} />
        {/* <Button2 title="Entrar" irParaPagina={handleEnterGame} /> */}
      </View>

      {/* <Snackbar
        visible={true}
        onDismiss={() => {}}
        action={{
          label: "Dismiss",
          onPress: () => {
            // Do side magic
          },
        }}
        duration={2000}
        style={styles.snackbar}
      >
        dsdsd
      </Snackbar> */}

      <Rodape_link
        text="Não possui conta?"
        link="Registre-se"
        irParaPagina={handleRegister}
      />
    </View>
  );
}
