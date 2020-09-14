// Main libraries
import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, FlatList } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

// Components
import ColorBox from './components/ColorBox'


// Passing array of color objects
const COLORS = [
  { colorName: 'Base03', hexCode: '#002b36' },
  { colorName: 'Base02', hexCode: '#073642' },
  { colorName: 'Base01', hexCode: '#586e75' },
  { colorName: 'Base00', hexCode: '#657b83' },
  { colorName: 'Base0', hexCode: '#839496' },
  { colorName: 'Base1', hexCode: '#93a1a1' },
  { colorName: 'Base2', hexCode: '#eee8d5' },
  { colorName: 'Base3', hexCode: '#fdf6e3' },
  { colorName: 'Yellow', hexCode: '#b58900' },
  { colorName: 'Orange', hexCode: '#cb4b16' },
  { colorName: 'Red', hexCode: '#dc322f' },
  { colorName: 'Magenta', hexCode: '#d33682' },
  { colorName: 'Violet', hexCode: '#6c71c4' },
  { colorName: 'Blue', hexCode: '#268bd2' },
  { colorName: 'Cyan', hexCode: '#2aa198' },
  { colorName: 'Green', hexCode: '#859900' },
]


// App content
const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          {/* Create FlatList of colors */}
          <FlatList
            data={COLORS}
            keyExtractor={item => item.colorName}
            renderItem={({ item }) => <ColorBox colorName={item.colorName} colorHex={item.hexCode} />}
            ListHeaderComponent={<Text style={styles.headingText}>Solarized</Text>}
          />
        </View>
      </SafeAreaView >
    </NavigationContainer>
  )
}

// App styling
const styles = StyleSheet.create({
  // App content container
  container: {
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 40,
    flex: 1,
  },

  // Heading text attributes
  headingText: {
    fontWeight: 'bold',
    fontSize: 18,
  },

  // Safe content area
  safeArea: {
    flex: 2
  },
})

export default App