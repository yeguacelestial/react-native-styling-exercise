import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native'


const PalettePreview = ({ handlePress, colorPalette }) => {
    return (
        // Create a ColorPalette selector
        <TouchableOpacity
            onPress={handlePress}>

            {/* Labeling ColorPalette selector */}
            <View style={styles.palettesListContainer}>
                <Text style={styles.palettesText}>{colorPalette.paletteName}</Text>

                {/* Color Palette Preview */}
                <FlatList
                    style={styles.colorBoxList}
                    horizontal={true}
                    data={colorPalette.colors.slice(0, 5)}
                    keyExtractor={item => item.colorName}
                    renderItem={({ item }) => <View style={[{ backgroundColor: item.hexCode }, styles.colorBox]}>
                    </View>}
                />
            </View>
        </TouchableOpacity>
    )
}

// Styles of Palette Preview
const styles = StyleSheet.create({
    palettesText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5
    },

    palettesListContainer: {
        paddingLeft: 8
    },

    // Color palettes preview
    colorBox: {
        height: 30,
        width: 30,
        marginRight: 10,

        // Shadowing elements on iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 1,

        // Shadowing elements on Android
        elevation: 10
    },

    colorBoxList: {
        marginBottom: 20
    }
})

export default PalettePreview