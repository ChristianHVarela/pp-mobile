import { createStackNavigator } from "@react-navigation/stack";
import Signin from "../../pages/Login";
import Home from "../../pages/Home"

const Stack = createStackNavigator()

export default function HomeStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Inicio" component={Home} options={{
                headerShown: false
            }}/>
            <Stack.Screen name="Login" component={Signin} options={{
                headerShown: false
            }}/>
        </Stack.Navigator>
    )
};