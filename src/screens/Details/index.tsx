import { Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import { RootStackParamList } from "@/types/navigation";

import { useNavigation } from "@react-navigation/native";


export const Details = () => {
  const navigation = useNavigation<RootStackParamList>();


  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>

      <Pressable onPress={() => navigation.navigate('SetUserNamePage')}>
        <Text>Go to Set User Name Details</Text>
      </Pressable>
    </View>
  );
}