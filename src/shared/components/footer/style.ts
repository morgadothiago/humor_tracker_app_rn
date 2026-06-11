import { StylesThemes } from "@/shared/global/theme"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  FooterContainer: {
    padding: 16,
    backgroundColor: StylesThemes.colors.paper,
    ...StylesThemes.shadow.default,
    paddingBottom: 24,
    borderTopEndRadius: 24,
    borderTopLeftRadius: 24,
  },
})
