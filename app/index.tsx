import { router } from "expo-router";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ExampleList } from "../example_list";
import CustomAppBar from "./components/appbar";

export default function HomePage() {
  return (
    <View style={Style.view}>
      <CustomAppBar title="Home" />
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
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: "gray",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
});