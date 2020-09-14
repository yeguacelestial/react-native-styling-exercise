// React libraries
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

// Import custom screens
import Home from './screens/Home'
import ColorPalette from './screens/ColorPalette'

// React Navigation
import { createStackNavigator } from '@react-navigation/stack'

// Create Sandbox Stack
const Stack = createStackNavigator()

// App content
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ColorPalette" component={ColorPalette} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default App