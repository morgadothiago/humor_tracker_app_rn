import { Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@/types/navigation";

import { styles } from "./styles";

export const Home = () => {
  const navigation = useNavigation<RootStackParamList>();


  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Pressable onPress={() => navigation.navigate('Details')}>
        <Text>Go to Details</Text>
      </Pressable>
    </View>
  );
}