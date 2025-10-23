import { Stack } from "expo-router";

export default function ExpoRouter() {
  return (
    <Stack>
      <Stack.Screen
        name = "index"
        options = {{
          headerShown: true,
          title: "Home",
        }} />
      <Stack.Screen
        name = "screens/Counter"
        options={{
          headerShown: true,
          title: "Counter",
        }} />
      <Stack.Screen
        name="screens/UserList"
        options={{
          headerShown: true,
          title: "User List",
        }} />
      <Stack.Screen
        name="screens/RouterPage"
        options={{
          headerShown: true,
          title: "Router Page",
}} />
    </Stack>
  );
}
