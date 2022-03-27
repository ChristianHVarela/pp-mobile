import react, {useState} from "react";
import { View, Text, TouchableOpacity} from "react-native";
import Signin from "../Login";
import Card from '../../components/Card'
import { styleType } from "./style"; 
import { LinearGradient } from "expo-linear-gradient";


export default function Home({navigation}){
    const [usuarioLogado, setUsuarioLogado] = useState('Faça seu Login!')


    return(
        <View style={styleType.container}>
           <Card>
                <Text style={styleType.label}>Olá, seja bem vindo!</Text>
                <Text style={styleType.label2}>Faça o login e baixe seus arquivos.</Text>
            </Card>

            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#008b8b','#00a86b']} style={styleType.buttonLinearGradient}>
                <TouchableOpacity style={styleType.buttonSubmit} onPress={() => navigation.navigate('Login')}>
                    <Text style={styleType.buttonLabel}>Logar</Text>
                </TouchableOpacity>
            </LinearGradient>
            
        </View>
    )
}
