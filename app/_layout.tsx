import { Stack } from "expo-router";
import { AppProvider } from "./example-3/context/AppContext";

export default function ExpoRouter() {
  return (
    <AppProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerShown: true,
            title: "Home",
          }}
        />
        <Stack.Screen
          name="example-1/Counter"
          options={{
            headerShown: true,
            title: "Counter",
          }}
        />
        <Stack.Screen
          name="example-2/UserList"
          options={{
            headerShown: true,
            title: "User List",
          }}
        />
        <Stack.Screen
          name="example-3/HomePage"
          options={{
            headerShown: true,
            title: "Home Page (useContext)",
          }}
        />
        <Stack.Screen
          name="example-4/LanguageExample"
          options={{
            headerShown: true,
            title: "i18n Example",
          }}
        />
      </Stack>
    </AppProvider>
  );
}
