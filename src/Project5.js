import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Square = ({ text, bgColor }) => (
    <View style={[styles.box, { backgroundColor: bgColor }]}>
        <Text>{text}</Text>
    </View>
);

export default function Project5() {
    return (
        <View style={styles.container}>
            <Square text="Square 1" bgColor="#00ffff"/>
            <Square text="Square 2" bgColor="#4dc2c2" />
            <Square text="Square 3" bgColor="#ff637c" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-around",
    },
    box: {
        width: 100,
        height: 100,
        justifyContent: "center",
        alignItems: "center",
    },
});