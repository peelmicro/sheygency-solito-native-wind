/* eslint-disable jsx-a11y/alt-text */
import { MotiPressable } from 'moti/interactions'
import { View, Text, Image } from 'react-native'

export function WhatWeDo() {
  const items = [
    {
      title: 'Web Development',
      description:
        'Web development is the work involved in developing a website for the Internet or an intranet.',
      source: require('../../assets/images/web.png'),
    },
    {
      title: 'Mobile Development',
      description:
        'Mobile development is the work involved in developing a mobile application for mobile devices such as smartphones, tablets, and feature phones.',
      source: require('../../assets/images/mobile.png'),
    },
    {
      title: 'Digital Marketing',
      description:
        'Digital marketing is the work involved in developing a digital marketing strategy and developing a digital marketing plan.',
      source: require('../../assets/images/digital-marketing.png'),
    },
    {
      title: 'Graphic Design',
      description:
        'Graphic design is the work involved in developing a digital marketing strategy and developing a digital marketing plan.',
      source: require('../../assets/images/graphicdesign.png'),
    },
  ]
  return (
    <View className="z-20 mt-10 md:mt-0">
      <Text className="text-secondary text-5xl text-center z-20 font-semibold md:text-8xl">
        What We Do ?
      </Text>
      <View className="h-96 w-full bg-primary mt-12"></View>
      <View className="flex flex-row flex-wrap justify-evenly mx-0 md:mx-32 -mt-56 px-5 md:px-0">
        {items.map((item) => (
          <View
            key={item.title}
            className="p-5 bg-white border shadow justify-center items-center flex-shrink md:basis-5/12 lg:basis-1/5 selection:w-full mt-10"
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
                className="h-24 w-24 self-center"
              />
              <Text className="text-2xl text-center my-2">{item.title}</Text>
              <Text className="text-gray-600 text-md">{item.description}</Text>
            </MotiPressable>
          </View>
        ))}
      </View>
    </View>
  )
}
