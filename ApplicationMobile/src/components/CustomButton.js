import React from 'react';

import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    buttonContainer: {
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginTop: 25,
    },
    buttonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
});

function CustomButton ({ onPress, title }) {
    return (
        <View>
            <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
                <Text style={styles.buttonText}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default CustomButton;
