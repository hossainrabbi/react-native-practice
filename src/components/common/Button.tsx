import React from "react";
import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  Text,
} from "react-native";
import { colors } from "../../constants/Colors";
import { spacing } from "../../constants/Spacing";

type ButtonType = {
  rounded?: boolean;
  color?: string;
  rippleColor?: string;
  bgColor?: string;
  size?: number;
  style?: StyleProp<PressableProps>;
  children: React.ReactNode;
} & PressableProps;

export default function Button({
  children,
  color = colors.black,
  bgColor = colors.primary,
  rippleColor = colors.primaryDark,
  size = 16,
  rounded,
  style,
  ...rest
}: ButtonType) {
  const pressStyles = StyleSheet.compose(styles.root, style && style);

  return (
    <Pressable
      android_ripple={{ color: rippleColor }}
      style={() => [
        pressStyles,
        { backgroundColor: bgColor },
        rounded && styles.rounded,
      ]}
      {...rest}
    >
      <Text style={[styles.text, { fontSize: size }]}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: spacing[3],
    paddingVertical: spacing[4],
    borderRadius: spacing[2],
  },
  rounded: {
    borderRadius: 30,
  },
  text: {
    textAlign: "center",
    textTransform: "capitalize",
  },
});
