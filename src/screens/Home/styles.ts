import { StylesThemes } from "@/shared/global/theme"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: StylesThemes.fonts.size.title,
    fontFamily: StylesThemes.fonts.family.extraBold,
  },
})
