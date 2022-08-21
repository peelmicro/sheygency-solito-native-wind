import { View, Text } from 'react-native'
import LottiComponent from '../lotti'

export default function Intro() {
  return (
    <View className="h-[800px] bg-primary flex flex-row flex-wrap items-center justify-center p-10">
      <View className="w-full md:basis-1/2 p-10">
        <LottiComponent lottiDocument="review-clients.json" />
      </View>
      <View className="w-full md:basis-1/2 flex flex-col space-y-10">
        <Text className="text-4xl font-semibold text-white md:text-6xl lg:text-8l">
          We <Text className="text-secondary font-bold">work</Text>
          {`\n`}
          together with our <Text className="text-green-500">clients</Text>
        </Text>
      </View>
    </View>
  )
}
