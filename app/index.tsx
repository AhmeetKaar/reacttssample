import { router } from "expo-router";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ExampleList } from "../example_list";

export default function HomePage() {
  return (
    <View style={Style.view}>
      <FlatList
        data={ExampleList}
        renderItem={({ item }) =>
          <TouchableOpacity style={Style.container}
            onPress={() => router.push(item.route as any)}
          >
            <Text style={Style.text}>{item.level + ". " + item.name}</Text>
          </TouchableOpacity>
        }
      />
    </View>
  );
}

const Style = StyleSheet.create({
  view: {
    flex: 1,
  },
  themeButton: {
    padding: 15,
    margin: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  themeButtonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    padding: 10,
    borderRadius: 10,
    margin: 10,
    borderWidth: 1,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
});