import { StylesThemes } from "@/shared/global/theme"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 4,
  },
  label: {
    fontSize: StylesThemes.fonts.size.body,
    fontFamily: StylesThemes.fonts.family.regular,
    color: StylesThemes.colors.text,
  },
  inputContainer: {
    borderRadius: 8,
    backgroundColor: StylesThemes.colors.background,
  },
  inputContainerPressed: {
    borderRadius: 8,
    backgroundColor: StylesThemes.colors.background,
    opacity: 0.5,
  },
})
