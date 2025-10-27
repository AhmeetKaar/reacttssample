import { router } from "expo-router";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ExampleList } from "../page_list";

export default function HomePage() {
  return (
    <View style={Style.view}>
      <FlatList
        data={ExampleList}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={Style.container}
            onPress={() => router.push(item.route as any)}
          >
            <Text style={Style.title}>{item.level + ". " + item.name}</Text>
            <Text style={Style.description}>{"• " + item.description}</Text>
          </TouchableOpacity>
        )}
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
  title: {
    paddingBottom: 5,
    fontSize: 16,
    fontWeight: "bold",
  },
  description: {
    fontSize: 12,
    fontWeight: "normal",
    color: "black",
  },
});
