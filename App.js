// Main libraries
import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'

// Components
import ColorBox from './components/ColorBox'


// App content
const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.headingText}>Here are some boxes of different colours</Text>

        {/* Import color box component */}
        <ColorBox colorName="Cyan" colorHex="#2aa198" />
        <ColorBox colorName="Blue" colorHex="#268bd2" />
        <ColorBox colorName="Magenta" colorHex="#d33682" />
        <ColorBox colorName="Orange" colorHex="#cb4b16" />
      </View>
    </SafeAreaView >
  )
}

// App styling
const styles = StyleSheet.create({
  // Main text attributes
  headingText: {
    fontWeight: 'bold',
    fontSize: 18,
  },

  // App content container
  container: {
    alignItems: 'center',
    paddingVertical: 30,
    flex: 1,
  },

  // Safe content area
  safeArea: {
    flex: 2
  },
})

export default App