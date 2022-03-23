import { StatusBar } from "expo-status-bar";
import react from "react";
import {StyleSheet, Text, View} from 'react-native';
import Signin from "./src/pages/signin";

export default function App() {
  return (
    <>
      <Signin />
      <StatusBar style="light" />
    </>
  );
}

