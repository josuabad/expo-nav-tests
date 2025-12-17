import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function SettingsScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Text style={styles.text}>Aquí van las opciones de configuración.</Text>
      {/* <Button
        title="Abrir Drawer"
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  title: { fontSize: 28, fontWeight: "600", marginBottom: 8 },
  text: { fontSize: 16, marginBottom: 12 },
});
