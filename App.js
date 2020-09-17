// React libraries
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

// Import custom screens
import Home from './screens/Home'
import ColorPalette from './screens/ColorPalette'
import ColorPaletteModal from './screens/ColorPaletteModal'

// React Navigation
import { createStackNavigator } from '@react-navigation/stack'

// Create Root Stack
const RootStack = createStackNavigator()

// Create Main Stack
const MainStack = createStackNavigator()

// Main Stack Screen
const MainStackScreen = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Home" component={Home} />
      <MainStack.Screen
        name="ColorPalette"
        component={ColorPalette}

        // Pass paletteName property as Screen title
        options={({ route }) => ({ title: route.params.paletteName })} />
    </MainStack.Navigator>
  )
}

// App content
const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal">
        <RootStack.Screen
          name="Main"
          component={MainStackScreen}
          options={{ headerShown: false }}
        />

        {/* Write custom modals here */}
        <RootStack.Screen
          name="ColorPaletteModal"
          component={ColorPaletteModal}
        />

      </RootStack.Navigator>
    </NavigationContainer>
  )
}

export default App