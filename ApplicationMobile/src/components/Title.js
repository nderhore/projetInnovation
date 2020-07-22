import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        color: "#000000",
        fontWeight: "bold",
        alignItems: 'center',
        justifyContent: 'center',
        textTransform: "uppercase",
        alignSelf: 'center',
        height: 100
    }
});

function Title ({ title }) {
    return (
        <View>
            <Text style={styles.text}>{title}</Text>
        </View>
    );
}

export default Title;
