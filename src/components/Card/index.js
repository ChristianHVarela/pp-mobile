import react from "react";
import { View, StyleSheet } from 'react-native'
import { clickProps } from "react-native-web/dist/cjs/modules/forwardedProps";
import {styleType} from './style'

export default function Card(props){
    return(
        <View style={styleType.card}>
            <View style={styleType.content}>
                {props.children}
            </View>
        </View>

    )
}

