import 'react-native-gesture-handler';
import React from "react";
import { StatusBar } from "react-native";
import { Colors } from "./src/global/styles";

import { NavigationContainer } from "@react-navigation/native";
import DrawerRoutes from "./src/routes/drawerRoutes";
import StackRoutes from "./src/routes/stackRoutes";
import Routes from "./src/routes";
import { CharacterProvider } from './src/context/characterContext';

// import  Routes from './src/routes'

export default function App() {
  return (
    <>
      <StatusBar
        backgroundColor={Colors.primaryColor}
        barStyle="light-content"
      />
      <CharacterProvider>
        <Routes />
      </CharacterProvider>
    </>
  );
}
