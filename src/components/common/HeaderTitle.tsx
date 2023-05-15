import React from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextProps,
  TextStyle,
} from "react-native";
import { colors } from "../../constants/Colors";

type HeaderTitleType = {
  style?: StyleProp<TextStyle>;
  children: React.ReactNode;
} & TextProps;

export default function HeaderTitle({
  children,
  style,
  ...rest
}: HeaderTitleType) {
  return (
    <Text style={[styles.title, style]} {...rest}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  title: {
    color: colors.black,
    fontSize: 34,
    fontWeight: "900",
    textAlign: "center",
    marginBottom: 0,
  },
});
