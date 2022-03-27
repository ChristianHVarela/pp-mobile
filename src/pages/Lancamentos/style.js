import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";
import styled from 'styled-components'

export const stylesType = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    modalContainer: {
        backgroundColor: 'white',
        margin: 20,
        padding: 5,
        borderRadius: 8,
        elevation: 10
    },
    buttonClose: {
        marginLeft: 320
    }
})

