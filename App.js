import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";

import GoalScreen from "./pages/GoalScreen";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
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
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#1e085a",
  },
});
