import react from "react";
import { exp } from "react-native/Libraries/Animated/Easing";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import styled from 'styled-components/native'


export const Title = styled.Text`
    color: #000;
    font-size: 26px;
    font-weight: 700;
    margin-bottom: 30px;
`

export const Container = styled.KeyboardAvoidingView`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #fff;
`

export const ContainerView = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding-bottom: 150px;
    width: 90%;
`

export const Input = styled.TextInput`
    border: 2px solid #000;
    margin-bottom: 30px;
    padding: 10px 30px;
    background-color: #fff;
    color: #111;
    font-size: 20px;
    border-radius: 7px;
    width: 90%;
`
export const ButtonSubmit = styled.TouchableOpacity`
    background-color: #79acff;
    border-radius: 7px;
    width: 45%;
    
    padding: 20px;
    align-items: center;
`

export const TextSubmit = styled.Text`
    font-size: 10px;
    color: #fff;
`

