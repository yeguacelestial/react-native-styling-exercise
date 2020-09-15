import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


const ColorBox = ({ colorName, colorHex }) => {
    const boxColor = {
        backgroundColor: colorHex
    }

    const textColor = {
        // Parse Hex color, and evaluates if the containing text should be black or white
        color: parseInt(colorHex.replace('#', ''), 16) > 0xffffff / 1.1 ? 'black' : 'white'
    }
    return (
        <View style={styles.colorContainer}>
            <Text style={[styles.colorContainer, boxColor, textColor]}>{colorName}: {colorHex}</Text>
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
        fontSize: 15,
        fontWeight: 'bold',

        // Shadowing elements on iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 1,

        // Shadowing elements on Android
        elevation: 10
    }
})

export default ColorBox