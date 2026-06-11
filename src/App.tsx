import { View } from "react-native"
import { Routes } from "./routes/routes"
import { StatusBar } from "react-native"
import { useFonts, Inter_400Regular, Inter_400Regular_Italic, Inter_700Bold } from "@expo-google-fonts/inter"
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();


export default function App() {
  const [fontsLoaded, error] = useFonts({
    regular: Inter_400Regular,
    regularItalic: Inter_400Regular_Italic,
    extraBold: Inter_700Bold,
  })



  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error])

  if (!fontsLoaded && !error) {
    return null
  }


  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <Routes />
    </View>
  )
}

