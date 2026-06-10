import { Text, View } from "react-native";
import { styles } from "./styles";


import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { TRouteProps } from "@/routes/Stack";


type TNavigationProps = NativeStackNavigationProp<Record<string, any>>;

export const Details = () => {
  const navigation = useNavigation<TNavigationProps>();
  const { params } = useRoute<TRouteProps<'Details'>>();


  return (
    <View style={styles.container}>
      <Text>Details Screen... {params.rate}</Text>


    </View>
  );
}