import { Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { styles } from "./styles";

import { TNavigationProps } from "@/routes/Stack";






export const Home = () => {
  const navigation = useNavigation<TNavigationProps>();


  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Pressable onPress={() => navigation.navigate('Details', { rate: 5 })}>
        <Text>Go to Details</Text>
      </Pressable>
    </View>
  );
}