import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Header() {
    const todays = () => {
        const today = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = today.toLocaleDateString('ru-RU', options); 
        return formattedDate;
    }

    return (
        <View style={styles.main}>
            <Text style={styles.text}>Список дел</Text>
            <Text style={styles.date}>{todays()}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        marginBottom: 60,
        
    },
    text: {
        color: 'white',
        fontSize: 36,
    },
    date: {
        fontSize: 14,
        color: '#A0A0A0',
    },
});