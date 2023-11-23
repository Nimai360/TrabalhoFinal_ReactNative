import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../../pages/login";
import Register from "../../pages/register";
import WaitScreen from "../../pages/waitScreen";

import TabRoutes from "../tabsRoutes";

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="StackLogin" component={Login} />
      <Stack.Screen name="StackRegister" component={Register} />
      <Stack.Screen name="StackWaitScreen" component={WaitScreen} />
      <Stack.Screen name="StackMainGame" component={TabRoutes} />
      {/* <Stack.Screen name="MainGame" component={TabRoutes} /> */}
    </Stack.Navigator>
  );
}
