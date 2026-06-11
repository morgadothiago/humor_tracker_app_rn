import { Pressable, Text, TouchableOpacity } from "react-native"
import { styles } from "./styles"


interface ButtonProps {
  children?: React.ReactNode
  buttonText?: string
}

export const Button = ({ children, buttonText }: ButtonProps) => {
  return (
    <Pressable style={({ pressed }) => ({
      ...styles.container,
      ...(pressed ? styles.buttonPressed : {})
    })}>
      {children}

      {!children && <Text style={styles.buttonText}>{buttonText}</Text>}
    </Pressable>
  )
}