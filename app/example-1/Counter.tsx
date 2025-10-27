import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function CounterScreen() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <View style={Style.view}>
      <View style={Style.centerContainer}>
        <Text style={Style.text}>{count}</Text>
        <View style={{ flexDirection: "row", gap: 20 }}>
          <TouchableOpacity style={Style.buttonContainer} onPress={decrement}>
            <Text>Decrement</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Style.buttonContainer} onPress={increment}>
            <Text>Increment</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const Style = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "lightblue",
  },
  centerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "black",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
  },
  buttonContainer: {
    backgroundColor: "gray",
    width: 100,
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
