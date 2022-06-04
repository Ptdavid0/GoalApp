import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { backgroundColor } from "./assets/colors/constants";

import GoalScreen from "./pages/GoalScreen";

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <View style={styles.appContainer}>
        <GoalScreen />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    alignItems: "center",
    paddingTop: 50,
    flex: 1,
    justifyContent: "flex-start",
    width: "100%",
    backgroundColor: backgroundColor,
  },
});
