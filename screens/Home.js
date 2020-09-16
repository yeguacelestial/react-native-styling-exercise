import React, { useState, useCallback, useEffect } from 'react'
import { View, FlatList, StyleSheet } from 'react-native'

// Custom components
import PalettePreview from '../components/PalettePreview'
import { useSafeArea } from 'react-native-safe-area-context'


const Home = ({ navigation }) => {
    // Creating useState object for fetching colors and displaying them
    const [colorPalettes, setColorPalettes] = useState([])

    // Refresh states
    const [isRefreshing, setIsRefreshing] = useState(false)

    // Fetching colors with Fetch API
    const handleFetchColors = useCallback(async () => {
        const result = await fetch('https://color-palette-api.kadikraman.now.sh/palettes')

        // If the request is succesful...
        if (result.ok) {
            // Get palettes objects
            const palettes = await result.json()

            // Store colors on the setColors object on useState
            setColorPalettes(palettes)
        }
    })

    // Triggering the function for fetching colors
    useEffect(() => {
        handleFetchColors()
    }, [])

    const handleRefresh = useCallback(async () => {
        setIsRefreshing(true)
        await handleFetchColors()
        setTimeout(() => {
            setIsRefreshing(false)
        }, 1000)
    })

    return (
        <View style={styles.viewStyles}>
            <FlatList
                data={colorPalettes}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {
                    return (
                        <PalettePreview
                            handlePress={() => {
                                navigation.navigate('ColorPalette', item)
                            }}
                            colorPalette={item}
                        />
                    )
                }}
                refreshing={isRefreshing}
                onRefresh={handleRefresh}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyles: {
        padding: 10
    }
})

export default Home