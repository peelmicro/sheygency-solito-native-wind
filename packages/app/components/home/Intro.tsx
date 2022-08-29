import { View, Text } from 'react-native'
import { Button } from '../button'
import LottieComponent from '../lottie'

export function HomeIntro() {
  return (
    <View className="flex flex-row flex-wrap items-center justify-center mt-5 md:mt-20">
      <View className="w-full md:basis-1/2 flex flex-col space-y-10">
        <Text className="text-5xl lg:text-7xl font-semibold text-primary">
          The Best{`\n`}
          <Text className="text-secondary font-bold">Marketing</Text>
        </Text>
        <Text className="text-4xl font-semibold text-black dark:text-white">
          {"Doesn't feel like marketing"}
        </Text>
        <Button
          pressableClassName="px-16 py-5 bg-secondary hover:bg-primary max-w-xs flex-row justify-center"
          textClassName="text-xl text-white"
          text="Get Started"
        />
      </View>
      <View className="w-full md:basis-1/2 p-10">
        <LottieComponent lottieDocument="marketing.json" />
      </View>
    </View>
  )
}
