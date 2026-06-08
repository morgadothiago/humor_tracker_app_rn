import { FistComponent } from "@/shared/components/FristComponent"
import { SafeAreaView } from "react-native-safe-area-context"
import { Button } from "./shared/components/Button"
import { StylesThemes } from "./shared/global/theme"
import { StyleSheet } from "react-native"
import { useState } from "react"


export default function App() {
  const [state, setState] = useState('0')

  function handlePressButton() {
    console.log("Button pressed!")
  }

  return (
    <SafeAreaView style={styles.container}>
      <FistComponent title={`Meu nome é... ${state}`} />


      <Button title="Click me!" onPress={handlePressButton} />
    </SafeAreaView>
  )
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: StylesThemes.paddingSpacing.large,
  }
})