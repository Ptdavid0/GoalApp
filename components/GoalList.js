import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import GoalItem from "./GoalItem";

const GoalList = ({ currentGoals, deleteGoalOnClick }) => {
  return (
    <FlatList
      alwaysBounceVertical={false}
      data={currentGoals}
      renderItem={(itemData) => (
        <View style={styles.listWrapper}>
          <GoalItem
            item={itemData.item}
            deleteGoalOnClick={deleteGoalOnClick}
          />
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  listWrapper: {
    marginVertical: 5,
  },
});

export default GoalList;
