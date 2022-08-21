import { View, Text } from 'react-native'
import LottiComponent from '../lotti'

function WhyMarketing() {
  return (
    <View className="mt-20 mb-20 flex items-center justify-center">
      <Text className="text-center text-5xl font-semibold text-primary md:text-8xl">
        <Text>Why </Text>
        <Text className="text-secondary">Marketing</Text>
      </Text>
      <LottiComponent lottiDocument="forget-password.json" />
      <Text className="text-gray-600 text-md mt-10">
        Do you know what your customers want? Do you think your customers trust
        your products? When was the last time you saw a customer tweeting about
        your product or service? Was it a complaint or compliment?
      </Text>
      <Text className="text-primary text-4xl font-semibold mt-10">
        The answers to all these questions lie in marketing.
      </Text>
      <Text className="text-gray-600 text-md mt-10">
        How you market your business determines if the enterprise will be
        successful or not. Marketing is a tool used to create and maintain
        demand, relevance, reputation, competition and more. Without it, your
        business is likely to close down due to lack of sales.
      </Text>
    </View>
  )
}

export default WhyMarketing
