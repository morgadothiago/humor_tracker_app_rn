import { Pressable, Text, TextInput, TextInputProps, View } from "react-native"
import { styles } from "./styles"

interface InputProps {
  label: string;
  children: React.ReactNode
  asButton?: boolean;
  onPress?: () => void;
};


export const Input = ({ children, label, asButton, onPress }: InputProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      {asButton ? (
        <Pressable
          onPress={onPress}
          style={({ pressed }) => pressed ? styles.inputContainerPressed : styles.inputContainer}
        >
          {children}
        </Pressable>
      ) : (
        <View style={styles.inputContainer}>
          {children}
        </View>
      )}
    </View>
  )
}