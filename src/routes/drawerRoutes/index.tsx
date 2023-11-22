import { createDrawerNavigator } from '@react-navigation/drawer'
import { Feather } from '@expo/vector-icons'
import TabRoutes from '../tabsRoutes';
import StackRoutes from '../stackRoutes';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
    return (
        <Drawer.Navigator screenOptions={{title: ''}}>
            <Drawer.Screen name='DrawerRegister'
                component={TabRoutes}
                options={{
                    drawerLabel: 'Register',
                }}
            />
            </Drawer.Navigator>
    )
}