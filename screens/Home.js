import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'


const Home = ({ navigation }) => {
    return (
        <View>
            {/* instead of onClick event, onPress event receives a function as action handling */}
            <TouchableOpacity
                onPress={() => {
                    // When user presses, go to the ColorPalette component
                    navigation.navigate('ColorPalette')
                }}>
                <Text>Solarized</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home