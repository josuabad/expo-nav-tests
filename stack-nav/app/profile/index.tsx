import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Profile() {
  return (
    <View style={styles.container}>
      {/* Nested stack example */}
      <Text style={styles.title}>Profile Home</Text>

      <Link href="/profile/details" style={styles.button}>
        {/* Profile details has presentation 'modal' which shows a different transition on native stacks */}
        <Text style={styles.buttonText}>Open Profile Details</Text>
      </Link>

      <Link href="/" style={styles.buttonSecondary}>
        <Text style={styles.buttonText}>Back to Home</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  title: {
    fontSize: 22,
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#7c3aed",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 8,
  },
  buttonSecondary: {
    backgroundColor: "#94a3b8",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
});
