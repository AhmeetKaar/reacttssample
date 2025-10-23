import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { useState } from "react";

export default function CounterScreen() {
    const [count, setCount] = useState(0);

    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <View style={Style.centerContainer}>
                <Text style={Style.text}>{count}</Text>
                <View style={{ flexDirection: "row", gap: 20 }}>
                    <TouchableOpacity style={Style.buttonContainer} onPress={() => setCount(count + 1)}>
                        <Text>Arttır</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Style.buttonContainer} onPress={() => setCount(count - 1)}>
                        <Text>Azalt</Text>

                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const Style = StyleSheet.create({
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
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
    },

});