import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootStackParamList } from "../../App";
import Button from "../components/common/Button";
import HeaderTitle from "../components/common/HeaderTitle";
import Text from "../components/common/Text";
import { colors } from "../constants/Colors";
import { spacing } from "../constants/Spacing";

type StartScreenProps = NativeStackScreenProps<RootStackParamList, "Start">;

export default function StartScreen({ navigation }: StartScreenProps) {
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
              <HeaderTitle>CookUp!</HeaderTitle>
              <Text style={styles.description}>
                3000+ easy and delicious recipes from the best chefs around the
                world
              </Text>
            </View>
            <Button onPress={() => navigation.navigate("SignUp")}>
              Get started
            </Button>
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
  description: {
    color: colors.black,
    textAlign: "center",
    marginTop: spacing[4],
    marginBottom: spacing[5],
    fontSize: 16,
  },
});
