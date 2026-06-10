import { Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import { RootStackParamList } from "@/types/navigation";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";


type TNavigationProps = NativeStackNavigationProp<Record<string, any>>;

export const Details = () => {
  const navigation = useNavigation<TNavigationProps>();


  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>

      <Pressable onPress={() => navigation.navigate('SetUserNamePage', { id: 1 })}>
        <Text>Go to Set User Name Details</Text>
      </Pressable>
    </View>
  );
}