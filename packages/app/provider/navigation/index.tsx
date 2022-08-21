import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native'
import { ColorSchemeName } from 'react-native'
import * as Linking from 'expo-linking'
import { useMemo } from 'react'

export function NavigationProvider({
  colorScheme,
  children,
}: {
  colorScheme?: ColorSchemeName
  children: React.ReactNode
}) {
  return (
    <NavigationContainer
      theme={colorScheme === 'light' ? DefaultTheme : DarkTheme}
      linking={useMemo(
        () => ({
          prefixes: [Linking.createURL('/')],
          config: {
            initialRouteName: 'home',
            screens: {
              home: '',
              about: 'about/',
              clients: 'clients/',
              contact: 'contact/',
            },
          },
        }),
        []
      )}
    >
      {children}
    </NavigationContainer>
  )
}
