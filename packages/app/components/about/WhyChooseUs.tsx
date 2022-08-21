/* eslint-disable jsx-a11y/alt-text */
import { MotiPressable } from 'moti/interactions'
import { View, Text, Image } from 'react-native'

export function WhyChooseUs() {
  const items = [
    {
      title: 'Innovative and Passionate',
      description:
        'We are a team of creative and passionate designers and developers. We are fully aware of the importance of designing for the digital age and strive to deliver the best result for our clients.',
      source: require('../../assets/images/innovation.png'),
    },
    {
      title: 'Good Return on Investment',
      description:
        'Working with us means providing your business with great savings. All our digital marketing and web development packages are being offered at competitive prices',
      source: require('../../assets/images/investment.png'),
    },
    {
      title: 'Seamless Customer Support',
      description:
        'We are always here to help you with any questions you may have. We are always here to help you with any questions you may have. We are always here to help you with any questions you may have.',
      source: require('../../assets/images/customer-support.png'),
    },
  ]
  return (
    <View className="mx-3 md:mx-32 mt-20 border shadow mb-20">
      <View className="bg-primary h-72 w-full flex justify-center items-center">
        <Text className="text-4xl md:text-5xl lg:text-7xl font-semibold text-white self-center">
          Why Choose US
        </Text>
      </View>
      <View className="flex flex-row flex-wrap justify-evenly p-5">
        {items.map((item) => (
          <View
            key={item.title}
            className="p-5 bg-white border shadow justify-center items-center flex-shrink md:basis-5/12 lg:basis-3/12 selection:w-full mt-5"
          >
            <MotiPressable
              animate={({ hovered, pressed }) => {
                'worklet'

                return {
                  scale: hovered || pressed ? 1.05 : 1,
                }
              }}
            >
              <Image
                source={item.source}
                accessibilityLabel={item.title}
                className="h-20 w-20 self-center"
              />
              <Text className="text-2xl text-center font-semibold my-2">
                {item.title}
              </Text>
              <Text className="text-gray-600 text-md">{item.description}</Text>
            </MotiPressable>
          </View>
        ))}
      </View>
    </View>
  )
}
