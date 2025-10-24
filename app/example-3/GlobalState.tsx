import { Text, TouchableOpacity, View } from "react-native";

export default function HomePage() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: 20,
      }}
    >
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          marginBottom: 20,
          fontFamily: "System",
        }}
      >
        Home Page
      </Text>

      <View
        style={{
          flexDirection: "row",
          gap: 20,
          justifyContent: "center",
          padding: 10,
          alignItems: "center",
        }}
      >
        <TouchableOpacity>
          <Text
            style={{ color: "lightblue", fontSize: 16, fontWeight: "bold" }}
          >
            Auth User
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: "row",
          gap: 20,
          justifyContent: "center",
          padding: 10,
          alignItems: "center",
        }}
      >
        <TouchableOpacity>
          <Text
            style={{ color: "lightblue", fontSize: 16, fontWeight: "bold" }}
          >
            Theme Toggle
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
