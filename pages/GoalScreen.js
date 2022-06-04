import React, { useState } from "react";
import { StyleSheet, View, Button } from "react-native";
import uuid from "react-native-uuid";
import GoalInput from "../components/GoalInput";
import GoalList from "../components/GoalList";

export default function GoalScreen() {
  const [goals, setGoals] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleGoalClick = (id) => {
    setGoals((currentGoals) => currentGoals.filter((goal) => goal.id !== id));
  };

  const handleGoalSave = (text) => {
    const currentGoal = {
      goal: text,
      id: uuid.v4(),
    };
    setGoals((prevGoals) => [...prevGoals, currentGoal]);
    setIsModalVisible(false);
  };

  const handleNewGoalClick = () => {
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  return (
    <View>
      <Button
        title="Add New Goal"
        color="#995ce9"
        onPress={handleNewGoalClick}
      ></Button>
      <GoalInput
        addGoal={handleGoalSave}
        modalVisible={isModalVisible}
        handleModalClose={handleModalClose}
      />
      <View style={styles.listContainer}>
        <GoalList currentGoals={goals} deleteGoalOnClick={handleGoalClick} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 5,
    paddingTop: 10,
  },
});
