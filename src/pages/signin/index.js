import react from 'react';
import Header from '../../components/Header';
import { Title, Container, ContainerView, Input, ButtonSubmit, TextSubmit } from './styles'



function Signin(){
    return(
        <Container>
            <Header />
            <ContainerView>
                <Title>Produção Primária</Title>
                <Input 
                    placeholderTextColor="#000"
                    placeholder="CNPJ"
                />
                <Input 
                    placeholderTextColor="#000"
                    placeholder="Login"
                />
                <Input 
                    placeholderTextColor="#000"
                    placeholder="Senha"
                    secureTextEntry
                />
                <ButtonSubmit>
                    <TextSubmit>Acessar</TextSubmit>
                </ButtonSubmit>
            </ContainerView>
        </Container>
    )
}

export default Signin;