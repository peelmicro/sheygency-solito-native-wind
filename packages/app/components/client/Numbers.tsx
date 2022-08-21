import { View, Text } from 'react-native'
export default function Numbers() {
  return (
    <View className="px-5 md:px-24 xlg:px-52 mt-20">
      <Text className="text-2xl text-gray-600 my-5">
        Until today we have provided our services to ....
      </Text>
      <View
        className="bg-secondary flex lg:space-x-10 space-x-0 p-5 justify-between rounded 
        flex-col md:flex-row items-center"
      >
        <View className="flex flex-col items-center">
          <Text className="text-7xl lg:text-8xl xlg:text-9xl text-white">
            152
          </Text>
          <Text className="text-white text-2xl">Clients</Text>
        </View>

        <View className="flex flex-col my-8 items-center">
          <Text className="text-7xl lg:text-8xl xlg:text-9xl text-white">
            485
          </Text>
          <Text className="text-white text-2xl">Projects</Text>
        </View>

        <View className="flex flex-col items-center">
          <Text className="text-7xl lg:text-8xl xlg:text-9xl text-white">
            24
          </Text>
          <Text className="text-white text-2xl">Locations</Text>
        </View>
      </View>
    </View>
  )
}
