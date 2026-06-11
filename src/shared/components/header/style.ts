import { StylesThemes } from "@/shared/global/theme"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  HeaderContainer: {
    padding: 16,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
  },
  HeaderText: {
    fontSize: StylesThemes.fonts.size.title,
    fontFamily: StylesThemes.fonts.family.regular,
  },
  HeaderBoldText: {
    fontSize: StylesThemes.fonts.size.title,
    fontFamily: StylesThemes.fonts.family.extraBold,
    color: StylesThemes.colors.primary,
  },
})
