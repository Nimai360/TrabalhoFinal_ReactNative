import { NavigationContainer } from "@react-navigation/native";
import React from "react";
// import DrawerRoutes from "../../drawer.routes";
import StackRoutes from "./stackRoutes";

export default function Routes() {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
}
