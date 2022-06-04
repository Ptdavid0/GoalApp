import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import GoalItem from "./GoalItem";

const GoalList = ({ currentGoals, deleteGoalOnClick }) => {
  return (
    <FlatList
      alwaysBounceVertical={false}
      data={currentGoals}
      style={styles.flatListContainer}
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
    marginVertical: 10,
  },
  flatListContainer: {
    flex: 5,
    marginTop: 10,
    paddingHorizontal: 50,
  },
});

export default GoalList;
