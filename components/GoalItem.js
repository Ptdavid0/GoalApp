import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";

const GoalItem = (props) => {
  const { item, deleteGoalOnClick } = props;
  return (
    <Pressable
      onPress={() => deleteGoalOnClick(item.id)}
      style={({ pressed }) => pressed && styles.pressedItem}
      //Add ripple effect for click on android
    >
      <View key={item.id} style={styles.listItem}>
        <Text style={styles.itemText}>{item.goal}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#aaa",
    borderWidth: 1,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.8,
  },
  itemText: {
    color: "white",
    padding: 20,
  },
});

export default GoalItem;
