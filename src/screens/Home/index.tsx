import { Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";


import { TNavigationProps } from "@/routes/Stack";
import { Header } from "@/shared/components/header";

import { styles } from "./styles";
import { Footer } from "@/shared/components/footer";
import { Input } from "@/shared/components/Input";

export const Home = () => {
  const navigation = useNavigation<TNavigationProps>();


  return (
    <View style={styles.container}>
      <Header name="" />

      <View style={{ flex: 1 }} />


      <Footer>
        <Input label="Nome" asButton onPress={() => navigation.navigate('SetUserNamePage')}>
          <Text style={styles.title}>Home Screen</Text>

        </Input>
      </Footer>


    </View>
  );
}