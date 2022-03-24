import react from "react";
import {createStackNavigator} from "@react-navigation/stack"
import Signin from "../../pages/signin";
import Home from "../../pages/signin/Home";


const Stack = createStackNavigator()

export default function Stacks(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Login"  component={Signin} />
        </Stack.Navigator>
    )
}