import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import MainGame from "../../pages/mainGame";
import Character from "../../pages/character";
import { Colors } from "../../global/styles";
import { CharacterProvider } from "../../context/characterContext";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <CharacterProvider>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: Colors.primaryColor,
            borderTopWidth: 2,
          },
          tabBarInactiveTintColor: Colors.textOpacity,
          tabBarActiveTintColor: Colors.secondaryColor,
          tabBarIconStyle: {
            marginTop: 5,
          },
        }}
      >
        <Tab.Screen
          name="TabMainGame"
          component={MainGame}
          options={{
            tabBarLabel: "JOGO",
            tabBarIcon: ({ focused, color, size }) => (
              <MaterialCommunityIcons
                name="sword-cross"
                size={24}
                color={focused ? Colors.secondaryColor : Colors.textOpacity}
              />
            ),
          }}
        />

        <Tab.Screen
          name="TabCharacter"
          component={Character}
          options={{
            tabBarLabel: "AVATAR",
            tabBarIcon: ({ focused, color, size }) => (
              <MaterialCommunityIcons
                name="account-circle"
                size={24}
                color={focused ? Colors.secondaryColor : Colors.textOpacity}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </CharacterProvider>
  );
}
