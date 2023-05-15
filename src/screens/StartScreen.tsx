import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/common/Button";
import { colors } from "../constants/Colors";
import { spacing } from "../constants/Spacing";

export default function StartScreen() {
  return (
    <View style={styles.root}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              source={require("../../assets/images/food_banner.jpg")}
              resizeMode="contain"
              style={styles.image}
            />
          </View>
          <View style={styles.content}>
            <View style={styles.textContent}>
              <Text style={styles.title}>CookUp!</Text>
              <Text style={styles.description}>
                3000+ easy and delicious recipes from the best chefs around the
                world
              </Text>
            </View>
            <Button>Get started</Button>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: colors.white,
    flex: 1,
  },
  container: {
    padding: spacing[7],
    justifyContent: "space-between",
    flex: 1,
  },
  imageContainer: {
    width: "100%",
    height: "70%",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  content: {
    marginTop: spacing[6],
    marginBottom: spacing[2],
  },
  textContent: {
    paddingHorizontal: spacing[5],
  },
  title: {
    color: colors.black,
    fontSize: 34,
    fontWeight: "900",
    textAlign: "center",
    marginBottom: 0,
  },
  description: {
    color: colors.black,
    textAlign: "center",
    marginTop: spacing[4],
    marginBottom: spacing[5],
    fontSize: 16,
  },
});
