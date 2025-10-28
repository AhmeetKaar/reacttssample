import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
import { useAppContext } from "./context/AppContext";

export default function HomePage() {
  const { theme, setTheme } = useAppContext();
  const backgroundColor = theme === "light" ? "white" : "lightblue";
  const buttonColor = theme === "light" ? "lightblue" : "blue";

  return (
    <View style={[Style.container, { backgroundColor }]}>
      <View style={Style.row}>
        <TouchableOpacity onPress={() => router.push("/example-3/AuthPage")}>
          <Text style={[Style.buttonText, { color: buttonColor }]}>
            Auth User
          </Text>
        </TouchableOpacity>
      </View>

      <View style={Style.row}>
        <TouchableOpacity onPress={setTheme}>
          <Text style={[Style.buttonText, { color: buttonColor }]}>
            Theme Toggle
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const Style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
  },
  row: {
    flexDirection: "row",
    gap: 20,
    justifyContent: "center",
    padding: 10,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
