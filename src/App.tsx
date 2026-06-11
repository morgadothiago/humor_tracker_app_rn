import { View } from "react-native"
import { Routes } from "./routes/routes"
import { StatusBar } from "react-native"

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <Routes />
    </View>
  )
}

