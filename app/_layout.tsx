import { Stack } from "expo-router";

export default function ExpoRouter() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="screens/Counter" options={{ headerShown: false }} />
      <Stack.Screen name="screens/UserList" options={{ headerShown: false }} />
      <Stack.Screen name="screens/RouterPage" options={{ headerShown: false }} />
    </Stack>
  );
}
