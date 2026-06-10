import { SafeAreaView } from "react-native-safe-area-context"
import { StyleSheet } from "react-native"

import { Routes } from "./routes/routes"
import { StatusBar } from "react-native"

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Routes />
    </SafeAreaView>
  )
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,

  }
})