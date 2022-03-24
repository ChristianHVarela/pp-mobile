import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import react from "react";
import {StyleSheet, Text, View} from 'react-native';
import Tabs from "./src/components/TabNavBar";
import Signin from "./src/pages/signin";

export default function App() {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}

