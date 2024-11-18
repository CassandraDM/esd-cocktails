import { Stack } from "expo-router";
import { StatusBar } from "react-native";

export default function RootLayout() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            title: "Home",
            headerStyle: {
              backgroundColor: "black",
            },
            headerTintColor: "pink",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="counter/index"
          options={{
            title: "Counter",
            headerStyle: {
              backgroundColor: "black",
            },
            headerTintColor: "pink",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="cocktails-list/index"
          options={{
            title: "Cocktails List",
            headerStyle: {
              backgroundColor: "black",
            },
            headerTintColor: "pink",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
      </Stack>
    </>
  );
}

// headerShown: false => to hide the header
