import { Stack } from "expo-router";

export default function ExpoRouter() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: true,
          title: "Home",
        }} />
      <Stack.Screen
        name="example-1/Counter"
        options={{
          headerShown: true,
          title: "Counter",
        }} />
      <Stack.Screen
        name="example-2/UserList"
        options={{
          headerShown: true,
          title: "User List",
        }} />
      <Stack.Screen
        name="example-3/GlobalState"
        options={{
          headerShown: true,
          title: "Global State",
        }} />
    </Stack>
  );
}
