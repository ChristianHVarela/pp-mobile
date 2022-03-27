import { createStackNavigator } from "@react-navigation/stack";
import HorasMaquina from "../../pages/Lancamentos";

const Stack = createStackNavigator()

export default function LancamentoStack(){
    return(
        <Stack.Screen initialParams={HorasMaquina}>
            <Stack.Screen name="Lancamentos" component={HorasMaquina} />
        </Stack.Screen>
    )
};