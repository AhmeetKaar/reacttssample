import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import CustomAppBar from "../components/appbar";
import { router } from "expo-router";
import axios from "axios";
import { useState, useEffect } from "react";
import { User } from "@/src/model/user";
 
export default function UserList() {
    const [users, setUsers] = useState<User[]>([]);
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(false);

    const fetchUsers = async () => {
        setLoading(true);
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/users");
            setUsers(response.data);
            console.log(count);
            setCount(count + 1);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };

    useEffect(() => {fetchUsers()}, []);

    return (
        <View style={Style.outerView}>
            <CustomAppBar title="User List" onBackPress={
                () => {
                    router.back();
                }
            } />
            <FlatList
                data={users}
                keyExtractor={item => String((item as any).id)}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={Style.list}
                        onPress={() => {
                            router.push(`/screens/UserDetail?user=${JSON.stringify(item)}`);
                        }}
                    >
                        <Text style={{ color: "black" }}>{(item as any).name}</Text>
                    </TouchableOpacity>
                )}
                ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
                contentContainerStyle={{ padding: 10 }}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

const Style = StyleSheet.create({
    outerView: {
        flex: 1,
        backgroundColor: "white",
    },
    list: {
        backgroundColor: "lightblue",
        padding: 10,
        borderRadius: 8,
    },
    container: {
        backgroundColor: "white",
        padding: 10,
        borderRadius: 10,
    },
});