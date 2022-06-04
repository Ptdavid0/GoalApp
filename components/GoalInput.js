import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";

const GoalInput = ({ addGoal, modalVisible, handleModalClose }) => {
  const [newGoal, setNewGoal] = useState("");

  const handleGoalInput = (text) => {
    setNewGoal(text);
  };

  const handleGoalSave = () => {
    if (newGoal.length > 0) {
      addGoal(newGoal);
      setNewGoal("");
    }
  };

  return (
    <Modal visible={modalVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.inputImage}
        />
        <TextInput
          style={styles.input}
          placeholder="What is your goal ?"
          onChangeText={handleGoalInput}
          defaultValue={newGoal}
          autoFocus={true}
        />
        <View style={styles.buttonContainer}>
          <Button
            title="Cancel"
            color="#f31282"
            onPress={() => handleModalClose()}
          />
          <Button title="Save" color="#8b61f4" onPress={handleGoalSave} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#311b6b",
  },
  input: {
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    borderWidth: 1,
    padding: 16,
    width: "80%",
    color: "#120438",
  },
  buttonContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
  },
  inputImage: {
    width: 100,
    height: 100,
    margin: 10,
  },
});

export default GoalInput;
