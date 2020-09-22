import React, { useState, useCallback } from 'react'
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Alert
} from 'react-native'


const ColorPaletteModal = () => {
    const [name, setName] = useState('')
    const handleSubmit = useCallback(() => {
        /* If not name -- If 'name' string is empty or undefined... */
        if (!name) {
            Alert.alert('Please enter a palette name')
        }
    }, [name])

    return (
        <View style={styles.container}>

            {/* Field 'Name of the palette' */}
            <Text style={styles.fieldName}>Name of the palette</Text>
            {/* Store value of TextInput on 'name', and then send it to useState method 'setName' */}
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={value => setName(value)}
                placeholder="Palette name"
            />
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: 'white',
        flex: 1,
    },

    /* Input styling */
    fieldName: {
        marginBottom: 10
    },
    input: {
        /* Border properties */
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,

        /* Text Input position */
        padding: 10,
        marginBottom: 50
    },

    /* Submit Button */
    button: {
        height: 40,
        backgroundColor: 'teal',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    }
})

export default ColorPaletteModal