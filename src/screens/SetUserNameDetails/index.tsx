import { Text, TextInput, View, } from "react-native";



import { styles } from "./styles";
import { Input } from "@/shared/components/Input";



export const SetUserNamePage = () => {

  return (
    <View style={styles.container}>
      <Input label="Nome">
        <TextInput


        />

      </Input>

    </View>
  );
};
