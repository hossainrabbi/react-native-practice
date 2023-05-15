import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Image,
  Text as RNText,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/common/Button";
import HeaderTitle from "../components/common/HeaderTitle";
import Text from "../components/common/Text";
import { colors } from "../constants/Colors";
import { spacing } from "../constants/Spacing";

export default function SignUpScreen() {
  return (
    <View style={styles.root}>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={styles.container}>
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
          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <RNText style={styles.inputText}>Email *</RNText>
              <TextInput placeholder="example@gmail.com" style={styles.input} />
            </View>
            <View style={styles.inputContainer}>
              <RNText style={styles.inputText}>Password *</RNText>
              <View style={styles.inputContent}>
                <TextInput
                  textContentType="password"
                  autoCapitalize="none"
                  autoCorrect={false}
                  secureTextEntry={true}
                  placeholder="******"
                  style={{ flex: 1 }}
                />
                <Ionicons name="eye-sharp" size={16} />
              </View>
            </View>
            <Button size={17} style={styles.button}>
              Sign up
            </Button>
            <Text style={styles.text}>
              Already have an account? <RNText>Login</RNText>
            </Text>
          </View>
        </ScrollView>
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
    flex: 1,
  },
  imageContainer: {
    width: "100%",
    height: 250,
    alignItems: "center",
    paddingTop: spacing[5],
    paddingBottom: spacing[8],
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
  formContainer: {
    marginTop: spacing[8],
  },
  inputContainer: {
    marginVertical: spacing[2],
  },
  inputText: {
    marginBottom: spacing[2],
  },
  inputContent: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: spacing[3],
    backgroundColor: "#dddddd52",
    borderRadius: spacing[3],
  },
  input: {
    padding: spacing[3],
    backgroundColor: "#dddddd52",
    borderRadius: spacing[3],
  },
  button: {
    marginTop: spacing[5],
    borderRadius: spacing[3],
    marginBottom: spacing[2],
  },
});
