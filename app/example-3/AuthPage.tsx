import { router } from "expo-router";
import { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useAppContext, Theme } from "./context/AppContext";
import loc from "../localization/localization";

export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const { signIn, theme } = useAppContext();

  const backgroundColor = theme === Theme.Light ? "white" : "lightblue";
  const buttonColor = theme === Theme.Light ? "lightblue" : "blue";
  const textColor = theme === Theme.Light ? "black" : "white";
  const inputBorderColor = theme === Theme.Light ? "black" : "white";

  function handleSignIn() {
    if (!email || !username || !phone) {
      Alert.alert(loc.t("loginErrorTitle"), loc.t("loginErrorMessage"));
      return;
    }

    const userToSignIn = {
      email,
      username,
      phone,
    };

    const success = signIn(userToSignIn);

    if (success) {
      Alert.alert(loc.t("loginSuccessTitle"), loc.t("loginSuccessMessage"), [
        {
          onPress: () => router.back(),
        },
      ]);
    } else {
      Alert.alert(loc.t("loginErrorTitle"), loc.t("loginErrorMessage"));
    }
  }

  return (
    <View style={[styles.container, { backgroundColor: backgroundColor }]}>
      <Text style={styles.headerText}>{loc.t("signIn")}</Text>
      <TextInput
        placeholder={loc.t("email")}
        placeholderTextColor={textColor}
        value={email}
        onChangeText={setEmail}
        style={[styles.input, { borderColor: inputBorderColor }]}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        placeholder={loc.t("userName")}
        placeholderTextColor={textColor}
        value={username}
        onChangeText={setUsername}
        style={[styles.input, { borderColor: inputBorderColor }]}
        autoCapitalize="none"
      />
      <TextInput
        placeholder={loc.t("phoneNumber")}
        placeholderTextColor={textColor}
        value={phone}
        onChangeText={setPhone}
        style={[styles.input, { borderColor: inputBorderColor }]}
        keyboardType="phone-pad"
      />
      <View style={[styles.buttonContainer, { backgroundColor: buttonColor }]}>
        <Button
          title={loc.t("signIn")}
          onPress={handleSignIn}
          color={textColor}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    width: "80%",
    borderRadius: 5,
  },
  buttonContainer: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
});
