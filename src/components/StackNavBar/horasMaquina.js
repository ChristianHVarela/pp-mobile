import { createStackNavigator } from "@react-navigation/stack";
import HorasMaquina from "../../pages/Lancamentos";

const Stack = createStackNavigator()

export default function HorasMaquinaStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="HorasMaquina" component={HorasMaquina} options={{
                headerShown: false
            }}/>
        </Stack.Navigator>
    )
};