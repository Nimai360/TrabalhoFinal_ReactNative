import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../login/styles";
import { GlobalStyles } from "../../global/styles";
import GoBackArrow from "../../components/goBackArrow";
import { Title_Subtitle } from "../../components/title_subtitle";

export default function WaitScreen() {
  const tempoStar = "15:39:45";
  const [timeToStart, setTimeToStart] = useState("");
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const finalTime = new Date();
    finalTime.setHours(Number(tempoStar.split(":")[0]));
    finalTime.setMinutes(Number(tempoStar.split(":")[1]));
    finalTime.setSeconds(Number(tempoStar.split(":")[2]));

    const diffTime = Math.abs(finalTime - currentTime);
    const diffHours = Math.floor(
      (diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const diffMinutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
    const diffSeconds = Math.floor((diffTime % (1000 * 60)) / 1000);

    if (diffHours > 0 || diffMinutes > 0 || diffSeconds > 0) {
      setTimeToStart(
        `${diffHours}:${diffMinutes < 10 ? "0" + diffMinutes : diffMinutes}:${
          diffSeconds < 10 ? "0" + diffSeconds : diffSeconds
        }`
      );
    } else {
    //   setTimeToStart("Começou");
    handleRegister();
    }
  }, [currentTime]); 
  
  const navigation = useNavigation();
  function handleRegister() {
    navigation.navigate("Login");
  }

  return (
    <View style={GlobalStyles.container}>
      <GoBackArrow />
      {/* Colocar um relogio em movimento acima da contagem regressiva */}
      <Title_Subtitle
        title={timeToStart}
        subtitle="Seu jogo começará em breve..."
      />
    </View>
  );
}
