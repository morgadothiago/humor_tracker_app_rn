import { View } from "react-native"
import { styles } from "./style"
import { useSafeAreaInsets } from 'react-native-safe-area-context'


interface IHeaderProps {
  children: React.ReactNode

}

export const Footer = ({ children }: IHeaderProps) => {
  const inset = useSafeAreaInsets();


  return (
    <View style={{ ...styles.FooterContainer, paddingBottom: inset.bottom + 16 }}>
      {children}

    </View>
  )
}