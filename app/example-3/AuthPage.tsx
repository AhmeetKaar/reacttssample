import { router } from "expo-router";
import { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useAppContext } from "./context/AppContext";
export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const { signIn, theme } = useAppContext();

  const backgroundColor = theme === "light" ? "white" : "lightblue";
  const buttonColor = theme === "light" ? "lightblue" : "blue";
  const textColor = theme === "light" ? "white" : "black";
  const inputBorderColor = theme === "light" ? "gray" : "black";

  function handleSignIn() {
    if (!email || !username || !phone) {
      Alert.alert("Hata", "Lütfen Tüm Alanları Doldurun");
      return;
    }

    const userToSignIn = {
      email,
      username,
      phone,
    };

    const success = signIn(userToSignIn);

    if (success) {
      Alert.alert("Başarılı", "Giriş başarılı!", [
        {
          onPress: () => router.back(),
        },
      ]);
    } else {
      Alert.alert(
        "Hata",
        "Kullanıcı bulunamadı. Lütfen bilgilerinizi kontrol edin.",
      );
    }
  }

  return (
    <View style={[styles.container, { backgroundColor: backgroundColor }]}>
      <Text style={styles.headerText}>Sign In</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={[styles.input, { borderColor: inputBorderColor }]}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        placeholder="User Name"
        value={username}
        onChangeText={setUsername}
        style={[styles.input, { borderColor: inputBorderColor }]}
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Phone Number"
        value={phone}
        onChangeText={setPhone}
        style={[styles.input, { borderColor: inputBorderColor }]}
        keyboardType="phone-pad"
      />
      <View style={[styles.buttonContainer, { backgroundColor: buttonColor }]}>
        <Button title="Sign In" onPress={handleSignIn} color={textColor} />
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
