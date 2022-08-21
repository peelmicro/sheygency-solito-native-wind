import { ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import ClientsList from '../../components/client/ClientsList'
import Intro from '../../components/client/Intro'

export function ClientsScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Intro />
        <ClientsList />
      </ScrollView>
    </SafeAreaView>
  )
}
