import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../../pages/Home";
import HomeStack from "../StackNavBar/home";
import LancamentoStack from "../StackNavBar/horasMaquina";
import CustomDrawer from "./style";
import Ionicons from 'react-native-vector-icons/Ionicons'
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import HorasMaquinaStack from "../StackNavBar/horasMaquina";

const Drawer = createDrawerNavigator();

const RootDrawer = () => {
    return(
            <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />} initialRouteName="HomeStack" 
            screenOptions={{
                headerShown: true,
                headerTitle: false,
                drawerActiveBackgroundColor: '#008b8b',
                drawerActiveTintColor: '#fff',
            }}>
                <Drawer.Screen name="HomeStack" component={HomeStack} options={{
                    title: 'Início',
                    headerTintColor: '#fff',
                    headerStyle: {
                        backgroundColor: '#008b8b',
                    },
                    drawerIcon: ({color}) => (
                        <Ionicons name="home-outline" size={22} color={color} />
                    )
                }} />
                <Drawer.Screen name="LancamentoStack" component={HorasMaquinaStack} options={{
                    title: 'Horas Máquina',
                    headerTintColor: '#fff',
                    headerStyle: {
                        backgroundColor: '#008b8b'
                    },
                    drawerIcon: ({color}) => (
                        <Ionicons name="timer-outline" size={22} color={color} />
                    )
                }} />
            </Drawer.Navigator>
    )
};


export default RootDrawer