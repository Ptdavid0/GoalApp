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
    <View style={styles.screnContainer}>
      <Button
        title="Add New Goal"
        color="#995ce9"
        onPress={handleNewGoalClick}
      />
      <GoalInput
        addGoal={handleGoalSave}
        modalVisible={isModalVisible}
        handleModalClose={handleModalClose}
      />
      <GoalList currentGoals={goals} deleteGoalOnClick={handleGoalClick} />
    </View>
  );
}

const styles = StyleSheet.create({
  screnContainer: {
    width: "100%",
    height: "95%",
  },
});
