import { NativeNavigation } from 'app/navigation/native'
import { Provider } from 'app/provider'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider>
        <NativeNavigation />
      </Provider>
    </SafeAreaProvider>
  )
}
