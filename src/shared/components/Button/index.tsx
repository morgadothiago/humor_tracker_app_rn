import { Pressable, Text, TouchableOpacity } from "react-native"
import { Styles } from "./styles"


interface ButtonProps {
  title: string
  onPress?: () => void

}

export const Button = ({ title, onPress }: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={[Styles.container]} >
      <Text style={Styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}