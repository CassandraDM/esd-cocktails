import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="counter/index" options={{ title: "Counter" }} />
      <Stack.Screen
        name="cocktails-list/index"
        options={{ title: "Cocktails List" }}
      />
    </Stack>
  );
}

// headerShown: false => to hide the header
