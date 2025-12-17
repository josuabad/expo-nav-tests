import { Stack } from "expo-router";
import React from "react";

export default function ProfileLayout() {
  return (
    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen name="index" options={{ title: "Profile" }} />
      {/* Presentation 'modal' shows a different transition on native stacks */}
      <Stack.Screen
        name="details"
        options={{ title: "Profile Details", presentation: "modal" }}
      />
    </Stack>
  );
}
