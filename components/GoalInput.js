import React, {useState} from 'react'
import {View, TextInput, Button, StyleSheet, Modal} from 'react-native'



const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState("")

    const goalInputHandler = (text) => {
        setEnteredGoal(text)
    }

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal)
        setEnteredGoal("")
    }

    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <TextInput onChangeText={goalInputHandler}  style={styles.addGoalInput} placeholder="Doel..." />
                <View style={styles.confirmButtons}> 
                    <Button color="red" onPress={props.onCancel} title="Annuleren"/>
                    <Button onPress={addGoalHandler}  title="Toevoegen" />
                </View>
            </View>
        </Modal>
    )
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",


      },
      addGoalInput: {
        width: "80%",
        borderColor: "black",
        borderWidth: 1,
        padding: 10,
        marginBottom: 5
      },


      confirmButtons: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }
});

export default GoalInput;