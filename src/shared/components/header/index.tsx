import { Text, View } from "react-native"
import { styles } from "./style"


interface IHeaderProps {
  name: string | undefined
}

export const Header = ({ name }: IHeaderProps) => {
  return (
    <View style={styles.HeaderContainer}>
      <Text style={styles.HeaderText}>Ola,</Text>
      <Text style={styles.HeaderBoldText}>{!name ? 'seu nome e' : `${name}`}</Text>

    </View>
  )
}