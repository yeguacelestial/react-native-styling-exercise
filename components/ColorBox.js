import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ColorBox = ({ colorName, colorHex }) => {
    const boxColor = {
        backgroundColor: colorHex
    }
    return (
        <View style={styles.colorContainer}>
            <Text style={[styles.colorContainer, boxColor]}>{colorName}: {colorHex}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    colorContainer: {
        // Position and size of container
        paddingVertical: 10,
        width: 350,

        // Font attributes
        textAlign: 'center',
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold'
    }
})

export default ColorBox