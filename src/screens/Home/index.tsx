import { Pressable, Text, TextInput, View } from "react-native";
import { useNavigation } from "@react-navigation/native";


import { TNavigationProps } from "@/routes/Stack";
import { Header } from "@/shared/components/header";

import { styles } from "./styles";
import { Footer } from "@/shared/components/footer";
import { Input } from "@/shared/components/Input";
import { StylesThemes } from "@/shared/global/theme";

export const Home = () => {
  const navigation = useNavigation<TNavigationProps>();


  return (
    <View style={styles.container}>
      <Header name="Thiago Morgado" />

      <View style={{ flex: 1 }} />


      <Footer>
        <Text style={styles.footerTitle}>Qual e seu nome ?</Text>
        <Input label="Nome" asButton onPress={() => navigation.navigate('SetUserNamePage')}>
          <TextInput
            editable={false}
            style={styles.footerInput}
            placeholder="Escreva seu nome aqui..."
            placeholderTextColor={StylesThemes.colors.textPlaceholder}
            pointerEvents="none"
          />

        </Input>
      </Footer>


    </View>
  );
}