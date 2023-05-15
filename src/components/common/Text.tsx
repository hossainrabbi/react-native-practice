import React from "react";
import { Text as RNText, StyleProp, TextProps, TextStyle } from "react-native";

type TextType = {
  style?: StyleProp<TextStyle>;
  children: React.ReactNode;
} & TextProps;

export default function Text({ children, style, ...rest }: TextType) {
  return (
    <RNText style={style} {...rest}>
      {children}
    </RNText>
  );
}
