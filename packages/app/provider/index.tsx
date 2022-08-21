import { NavigationProvider } from './navigation'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useColorScheme } from 'nativewind'

export function Provider({ children }: { children: React.ReactNode }) {
  const { colorScheme } = useColorScheme()
  return (
    <SafeAreaProvider>
      <NavigationProvider colorScheme={colorScheme}>
        {children}
      </NavigationProvider>
    </SafeAreaProvider>
  )
}
