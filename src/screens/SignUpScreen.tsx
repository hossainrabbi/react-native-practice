import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderTitle from "../components/common/HeaderTitle";
import Text from "../components/common/Text";
import { colors } from "../constants/Colors";
import { spacing } from "../constants/Spacing";

export default function SignUpScreen() {
  return (
    <View style={styles.root}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View>
            <View style={styles.imageContainer}>
              <Image
                source={require("../../assets/images/food_banner.jpg")}
                resizeMode="contain"
                style={styles.image}
              />
            </View>
            <HeaderTitle style={{ fontSize: 40 }}>CookUp!</HeaderTitle>
            <Text style={styles.text}>Create an account to continue</Text>
          </View>
          <View></View>
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
    height: 250,
    alignItems: "center",
    paddingTop: spacing[5],
    paddingBottom: spacing[7],
  },
  image: {
    width: 200,
    height: "100%",
  },
  text: {
    textAlign: "center",
    marginVertical: spacing[1],
    fontSize: 18,
  },
});
