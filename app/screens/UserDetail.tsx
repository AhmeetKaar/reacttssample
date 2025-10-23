import { userFromJson } from "@/src/model/user";
import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function UserDetailScreen() {
    const params = useLocalSearchParams<{ userData: string }>();
    const user = params.userData ? userFromJson(JSON.parse(params.userData)) : null;

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