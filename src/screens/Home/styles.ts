import { StylesThemes } from "@/shared/global/theme"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {},

  footerTitle: {
    textAlign: "center",
    fontFamily: StylesThemes.fonts.family.regular,
    fontSize: StylesThemes.fonts.size.body,
    color: StylesThemes.colors.text,
    marginBottom: 8,
  },
  footerInput: {
    fontFamily: StylesThemes.fonts.family.regular,
    fontSize: StylesThemes.fonts.size.body,
    color: StylesThemes.colors.text,
    padding: 12,
  },
})
