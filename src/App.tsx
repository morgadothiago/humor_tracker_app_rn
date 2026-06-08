import { FistComponent } from "@/shared/components/FristComponent"
import { SafeAreaView } from "react-native-safe-area-context"


export default function App() {
  return (
    <SafeAreaView>
      <FistComponent title="Hello, React Native!" />
      <FistComponent title="Hello, React Native!" />
    </SafeAreaView>
  )
}