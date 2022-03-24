import { LinearGradient } from "expo-linear-gradient";
import react from "react";
import Header from "../../../components/Header";
import { Container } from "../styles";


export default function HorasMaquina(){
    return(
        <Container>
            <LinearGradient
                colors={['#4c669f', '#3b5998', '#192f6a']} />
        </Container>
    )
}