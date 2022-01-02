import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import { StyleSheet, Button, View, FlatList } from 'react-native';

import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {

  const [courseGoals, setCourseGoals] = useState([])
  const [isAdding, setIsAdding] = useState(false)


  const addGoalHandler = (currentGoal) => {
    setCourseGoals(courseGoals => [...courseGoals, { key: Math.random().toString(), value: currentGoal }])
    setIsAdding(false);
  }

  const removeGoalHandler = (goalKey) => {
    setCourseGoals(courseGoals => {
      return courseGoals.filter((goal) => goal.key !== goalKey);
    });
  }

  const cancelGoalAdditionHandler = () => {
    setIsAdding(false)
  }

  return (
    <View style={styles.container}>
      <Button title="Voeg doel toe" onPress={() => setIsAdding(true)}/>
      <GoalInput visible={isAdding} onCancel={cancelGoalAdditionHandler} onAddGoal={addGoalHandler}/>
      <View>
        <FlatList data={courseGoals} renderItem={itemData => <GoalItem id={itemData.item.key} onDelete={removeGoalHandler} title={itemData.item.value} />} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  addGoalInput: {
    borderColor: "black",
    borderWidth: 1,
    padding: 2,
    marginRight: 5,
    flex: 1
  },

});
