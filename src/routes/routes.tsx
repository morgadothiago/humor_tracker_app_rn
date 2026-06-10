import { NavigationContainer } from "@react-navigation/native"
import { RootStack } from "./Stack"

export const Routes = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  )
}