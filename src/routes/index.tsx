import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import Login from "../pages/Login";
// import Register from "../pages/Register";

const Stack = createNativeStackNavigator();

export default function Routes(){
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen 
            // name="Login" 
            // component={Login} 
            // options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
}