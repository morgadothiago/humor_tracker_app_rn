import { Text, View } from "react-native"



// Criando uma interface para definir as props do components.
interface fristComponentsProps {
  title: string

}

export const FistComponent = ({ title }: fristComponentsProps) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  )
}