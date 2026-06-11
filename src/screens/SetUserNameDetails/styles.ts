import { StylesThemes } from "@/shared/global/theme"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Title: {
    textAlign: "center",
    fontFamily: StylesThemes.fonts.family.regular,
    fontSize: StylesThemes.fonts.size.body,
    color: StylesThemes.colors.text,
    marginBottom: 8,
  },
  Input: {
    fontFamily: StylesThemes.fonts.family.regular,
    fontSize: StylesThemes.fonts.size.body,
    color: StylesThemes.colors.text,
    padding: 12,
  },
})
