import { Text, View } from "react-native";
import { styles } from "./styles";


import { useRoute } from "@react-navigation/native";

import { TRouteProps } from "@/routes/Stack";




export const Details = () => {
  const { params } = useRoute<TRouteProps<'Details'>>();


  return (
    <View style={styles.container}>
      <Text>Details Screen... {params.rate}</Text>


    </View>
  );
}