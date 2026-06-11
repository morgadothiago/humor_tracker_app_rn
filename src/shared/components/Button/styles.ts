import { StylesThemes } from "@/shared/global/theme"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: StylesThemes.colors.primary,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  buttonPressed: {
    opacity: 0.8,
  },
  buttonText: {
    fontSize: StylesThemes.fonts.size.body,
    fontFamily: StylesThemes.fonts.family.regular,
    color: StylesThemes.colors.primaryText,
  },
})
