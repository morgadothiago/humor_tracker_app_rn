import { Text, View, } from "react-native";
import { useRoute, } from "@react-navigation/native";


import { styles } from "./styles";



export const SetUserNamePage = () => {
  const { params } = useRoute<any>();



  return (
    <View style={styles.container}>
      <Text>Set User Name Details Screen... {params.id}</Text>

    </View>
  );
};
