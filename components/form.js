import React, { useState } from "react";
import { StyleSheet, TextInput, Button, View } from "react-native";

export default function Form({ addHandler }) {
    const [text, setValue] = useState("");
    const onChange = (text) => {
        setValue(text);
    };
    return (
        <View style={styles.box}>
            <TextInput style={styles.input}
                onChangeText={onChange} 
                placeholder="Впишите задачу..." />
            <Button
                style={styles.btn}
                title="Добавить задачу"
                onPress={() => addHandler(text)}>
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    box: {
        marginBottom: 40,
        width:'30%',
    },
    btn: {
        padding: 20,
        borderRadius: 16,
    },
    input: {
        padding: 20,
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        marginBottom:20,
    },
});