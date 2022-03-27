import react from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootDrawer from "./src/components/DrawlerNavBar";
import HorasMaquina from "./src/pages/Lancamentos";

export default function App() {
  return (
    <NavigationContainer>
      <RootDrawer />
    </NavigationContainer>
  );
}

