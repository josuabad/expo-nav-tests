import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import HomeScreen from "./index";
import SettingsScreen from "./SettingsScreen";

const Drawer = createDrawerNavigator();

export default function Layout() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}
