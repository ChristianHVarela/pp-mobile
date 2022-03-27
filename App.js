import react from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootDrawer from "./src/components/DrawlerNavBar";

export default function App() {
  return (
    <NavigationContainer>
      <RootDrawer />
    </NavigationContainer>
  );
}

