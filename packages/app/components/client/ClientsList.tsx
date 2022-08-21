/* eslint-disable jsx-a11y/alt-text */
import { View, Text, Pressable, Image } from 'react-native'
import { useState } from 'react'
import Numbers from './Numbers'
import { styled } from 'nativewind'
import ArrowLeftSolid from '../../assets/icons/arrow-left-solid'
import ArrowRightSolid from '../../assets/icons/arrow-right-solid'

const StyledArrowLeftSolid = styled(ArrowLeftSolid, {
  classProps: ['color'],
})
const StyledArrowRightSolid = styled(ArrowRightSolid, {
  classProps: ['color'],
})

export default function ClientsList() {
  const [selectedClientIndex, setSelectedClientIndex] = useState(0)
  const clients = [
    {
      name: 'Slack',
      url: 'https://www.tcs.com/',
      description:
        'Slack is a cloud-based set of tools and services that makes it easy to get work done. It’s built for teams of all sizes, and has a simple, beautiful design that’s easy to use and works great on any device.',
      source: require('../../assets/images/slack.png'),
    },
    {
      name: 'Twitter',
      url: 'https://www.infosys.com/',
      description:
        'Twitter is a social networking service that enables users to send and read short 140-character messages called “tweets”.',
      source: require('../../assets/images/twitter.png'),
    },
    {
      name: 'Instagram',
      url: 'https://www.wipro.com/',
      description:
        'Instagram is a photo-sharing, video-sharing and communication service that is owned and operated by Facebook, Inc. It was created by Kevin Systrom and Mike Krieger, and launched in October 2010.',
      source: require('../../assets/images/instagram.png'),
    },
    {
      name: 'Spotify',
      url: 'https://www.hcl.com/',
      description:
        'Spotify is a music streaming service that offers a wide range of music genres, including rock, pop, country, electronic, and more. It was created by Swedish computer programmer and programmer Johan Liljegren in 2007.',
      source: require('../../assets/images/spotify.png'),
    },
    {
      name: 'Messenger',
      url: 'https://www.accenture.com/',
      description:
        'Messenger is a messaging app that enables users to communicate with their friends and family. It was created by Facebook in 2011.',
      source: require('../../assets/images/messenger.png'),
    },
    {
      name: 'Cognizant',
      url: 'https://www.capgemini.com/',
      description:
        'Cognizant is a multinational technology company headquartered in Bengaluru, India. It is the largest Indian IT company by market capitalization.',
      source: require('../../assets/images/cognizant.png'),
    },
    {
      name: 'Github',
      url: 'https://www.cognizant.com/',
      description:
        'GitHub is a web-based hosting service for version control of code using the distributed version control (DVCS) model. It was created by Linus Torvalds in 2005.',
      source: require('../../assets/images/github.png'),
    },
  ]

  const next = () => {
    setSelectedClientIndex(selectedClientIndex + 1)
  }

  const previous = () => {
    setSelectedClientIndex(selectedClientIndex - 1)
  }

  return (
    <View className="mb-20">
      <View className="bg-primary h-44 md:rounded-b-full rounded-b-2xl"></View>
      <View className="flex flex-col md:flex-row justify-center -mt-44">
        <View className="hidden md:flex w-0 md:w-1/12 place-self-end">
          {selectedClientIndex !== 0 && (
            <Pressable onPress={previous} className="cursor-pointer self-end">
              <StyledArrowLeftSolid
                height={36}
                width={36}
                color="text-gray-600"
              />
            </Pressable>
          )}
        </View>
        <View className="w-12/12 md:w-9/12 m-5 md:m-0">
          <View className="flex flex-col md:flex-row ">
            {[
              clients[selectedClientIndex],
              clients[selectedClientIndex + 1],
              clients[selectedClientIndex + 2],
            ].map((item) => (
              <View
                key={item?.name}
                className="bg-white shadow p-5 md:w-4/12 border h-auto m-5 md:m-0"
              >
                <View className="flex flex-col lg:flex-row items-center justify-between ">
                  <Image
                    source={item?.source}
                    accessibilityLabel={item?.description}
                    className="z-20 w-10 md:w-24 lg:w-32 h-10 md:h-24 lg:h-32"
                  />
                  <Text className="text-primary font-semibold text-2xl">
                    {item?.name}
                  </Text>
                </View>
                <Text className="text-gray-600 text-base mt-10">
                  {item?.description}
                </Text>
              </View>
            ))}
          </View>
        </View>
        <View className="hidden md:flex w-0 md:w-1/12 place-self-end">
          {selectedClientIndex < 4 && (
            <Pressable onPress={next} className="text-4xl cursor-pointer">
              <StyledArrowRightSolid
                height={36}
                width={36}
                color="text-gray-600"
              />
            </Pressable>
          )}
        </View>
      </View>

      <View className="flex flex-row justify-center mt-5">
        <View className="flex flex-row space-x-2">
          {[1, 2, 3, 4, 5].map((_item, index) => (
            <Pressable
              key={index}
              onPress={() => setSelectedClientIndex(index)}
              className={`bg-gray-200 h-8 w-8 rounded-full cursor-pointer hover:scale-105 transition-all transform duration-300 ${
                selectedClientIndex === index &&
                'border-2 border-secondary h-10 w-10'
              }`}
            />
          ))}
        </View>
      </View>

      <Numbers />
    </View>
  )
}
