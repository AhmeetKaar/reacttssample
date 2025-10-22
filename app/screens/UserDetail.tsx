import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { User } from "@/src/model/user";

export default function UserDetailScreen() {
    const params = useLocalSearchParams<{ user: string }>();
    const user: User | null = params.user ? JSON.parse(params.user) : null;

    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <Text> Name: {user?.name}</Text>
            <Text> Email: {user?.email}</Text>
            <Text> Phone: {user?.phone}</Text>
            <Text> Website: {user?.website}</Text>
            <Text> Company: {user?.company?.name}</Text>
            <Text> Catch Phrase: {user?.company?.catchPhrase}</Text>
            <Text> BS: {user?.company?.bs}</Text>
        </View>
    );
}