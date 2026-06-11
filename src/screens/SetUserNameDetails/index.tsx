import { Text, TextInput, View, } from "react-native";



import { styles } from "./styles";
import { Input } from "@/shared/components/Input";
import { StylesThemes } from "@/shared/global/theme";
import { Button } from "@/shared/components/Button";



export const SetUserNamePage = () => {

  return (
    <View style={styles.container}>

      <Text style={styles.Title}>Qual e seu nome ?</Text>
      <Input label="Nome">
        <TextInput
          autoFocus
          style={styles.Input}
          placeholder="Escreva seu nome aqui..."
          placeholderTextColor={StylesThemes.colors.textPlaceholder}

        />

      </Input>


      <View style={{ flex: 1 }} />
      <Button buttonText="Salvar" />


    </View>
  );
};
