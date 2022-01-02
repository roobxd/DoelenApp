import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const GoalItem = props => {
    return (
        <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
            <View style={styles.goal} on>
                <Text style={{ color: "white" }}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    goal: {
        margin: 10,
        padding: 15,
        backgroundColor: "dodgerblue",
        color: "white"
    }
});

export default GoalItem;