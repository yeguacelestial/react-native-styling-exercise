import React from 'react'
import { View, FlatList, StyleSheet, Text } from 'react-native'

// Custom components
import ColorBox from '../components/ColorBox'


const ColorPalette = ({ route }) => {
    // Get params
    const { paletteName, colors } = route.params

    return (
        <View style={styles.container}>
            {/* Create FlatList of colors */}
            <FlatList
                data={colors}
                keyExtractor={item => item.colorName}
                renderItem={({ item }) => <ColorBox colorName={item.colorName} colorHex={item.hexCode} />}
                ListHeaderComponent={<Text style={styles.headingText}>{paletteName}</Text>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    // App content container
    container: {
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingTop: 10,
        flex: 1,
        backgroundColor: 'white'
    },

    // Heading text attributes
    headingText: {
        fontWeight: 'bold',
        fontSize: 18,
    },
})

export default ColorPalette