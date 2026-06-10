import { Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";


import { styles } from "./styles";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";


type TNavigationProps = NativeStackNavigationProp<Record<string, any>>;

export const Home = () => {
  const navigation = useNavigation<TNavigationProps>();


  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Pressable onPress={() => navigation.navigate('Details', { rate: 3 })}>
        <Text>Go to Details</Text>
      </Pressable>
    </View>
  );
}