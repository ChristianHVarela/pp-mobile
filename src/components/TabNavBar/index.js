import react from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Signin from "../../pages/signin";
import HorasMaquina from "../../pages/signin/Lancamentos";
import Home from "../../pages/signin/Home";
import Stacks from "../StackNavBar";


const Tab = createBottomTabNavigator()

export default function Tabs(){
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: { 
                    backgroundColor: '#121212',
                    borderTopColor: 'transparent'
                },
            }}
        >
            <Tab.Screen  name="HomeScreen" component={Stacks}/>
            <Tab.Screen  name="Lancamentos" component={HorasMaquina}/>
        </Tab.Navigator>
    )
}