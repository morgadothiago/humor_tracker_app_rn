import { Text, TextInput, View, } from "react-native";



import { styles } from "./styles";
import { Input } from "@/shared/components/Input";
import { StylesThemes } from "@/shared/global/theme";



export const SetUserNamePage = () => {

  return (
    <View style={styles.container}>

      <Text style={styles.Title}>Qual e seu nome ?</Text>
      <Input label="Nome">
        <TextInput

          style={styles.Input}
          placeholder="Escreva seu nome aqui..."
          placeholderTextColor={StylesThemes.colors.textPlaceholder}

        />

      </Input>

    </View>
  );
};
