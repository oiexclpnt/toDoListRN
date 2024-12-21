import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default function ListItem({ el, deleteHandler }) {
    return (
        <TouchableOpacity onPress={() => deleteHandler(el.key)} style={styles.listItem}>
            <Text style={styles.text}>{el.text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    listItem: {
        padding: 20,
        backgroundColor: '#757575',
        borderRadius: 16,
        marginTop: 20,
        width: '30%',

    },
    text: {
        color: 'white',
        textAlign: 'center',
    }
});