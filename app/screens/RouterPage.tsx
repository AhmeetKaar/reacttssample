import { View, Text } from "react-native";
import CustomAppBar from "../components/appbar";
import { router } from "expo-router";

export default function RouterPage() {
    return (
        <View>
            <CustomAppBar title="Router Page" onBackPress={
                () => {
                    router.back();
                }
            } />
            <Text>Router Page</Text>
        </View>
    );
}