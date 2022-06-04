import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { itemBackgroundColor, textColor } from "../assets/colors/constants";

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
    borderRadius: 16,
    backgroundColor: itemBackgroundColor,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.26,
    shadowRadius: 2.68,
    elevation: 7,
  },
  pressedItem: {
    opacity: 0.6,
  },
  itemText: {
    padding: 30,
    color: textColor,
  },
});

export default GoalItem;
