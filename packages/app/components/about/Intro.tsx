import { View, Text } from 'react-native'
import AboutIntro from './AboutIntro'

export function Intro() {
  return (
    <>
      <View
        className="md:bg-gradient-to-r from-[#ff4e00] to-[#ec9f05]
      rotate-12 -top-48 -left-20 right-0 rounded-[50px] h-[700px] bg-transparent md:bg-[#ff4e00]"
      ></View>
      <View className="z-10 flex-row flex-wrap items-center justify-center absolute bg-secondary md:bg-transparent w-full">
        <View className="w-4/5 md:w-1/2">
          <AboutIntro width={330} className="w-auto self-center" />
        </View>
        <View className="w-4/5 md:w-1/2">
          <Text className="text-4xl font-semibold text-white md:text-5xl lg:text-7xl">
            SHEYGENCY
          </Text>
          <Text className="text-xl md:text-2xl text-white ">
            OLDER | STRONGER | WISER
          </Text>
        </View>
      </View>
    </>
  )
}
