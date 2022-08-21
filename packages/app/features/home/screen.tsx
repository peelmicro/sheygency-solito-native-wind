import { HomeIntro } from '../../components/home/Intro'
import { SafeAreaView } from 'react-native-safe-area-context'
import HomeMarketingStrategies from '../../components/home/MarketingStrategies'
import { ScrollView, View } from 'react-native'
import WhyMarketing from '../../components/home/WhyMarketing'
export function HomeScreen() {
  return (
    <SafeAreaView>
      <View className="flex-1">
        <ScrollView className="px-2 md:px-12 lg:px-32">
          <HomeIntro />
          <HomeMarketingStrategies />
          <WhyMarketing />
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}
