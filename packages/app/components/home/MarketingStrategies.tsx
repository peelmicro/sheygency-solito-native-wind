/* eslint-disable jsx-a11y/alt-text */
import { MotiPressable } from 'moti/interactions'
import { View, Text, Image } from 'react-native'

function HomeMarketingStrategies() {
  const strategies = [
    {
      title: 'CONTENT MARKETING',
      description:
        'Content marketing is a form of marketing focused on creating, publishing, and distributing content for a targeted audience online. ',
      source: require('../../assets/images/content-marketing.png'),
    },
    {
      title: 'INBOUND MARKETING',
      description:
        'Inbound is far and away the most effective B2B marketing strategy because it leverages the strengths of the majority of the other nine strategies to attract, engage, and delight customers. ',
      source: require('../../assets/images/inbound-marketing.png'),
    },
    {
      title: 'SOCIAL MEDIA',
      description:
        'Social media marketing focuses on providing users with content they find valuable and want to share across their social networks, resulting in increased visibility and website traffic.   ',
      source: require('../../assets/images/social-media.png'),
    },
    {
      title: 'SEARCH ENGINE OPTIMIZATION',
      description:
        'Search engine optimization is the process of improving the quality and quantity of website traffic to a website or a web page from search engines.',
      source: require('../../assets/images/seo.png'),
    },
  ]
  return (
    <View>
      <Text className="text-3xl font-semibold text-primary mt-10 md:mt-0">
        Want to boost your business growth?
      </Text>
      <Text className="text-5xl md:text-7xl font-semibold text-primary mt-10">
        <Text>The </Text>
        <Text className="text-secondary">SOLUTION </Text>
        <Text>is here... </Text>
      </Text>
      <Text className="text-gray-600 text-xl mt-10">
        Curious about what business professionals think of different marketing
        strategies. We took a look at recent survey results and reports that
        compiled data on the topic, and created a list of 10 B2B marketing
        strategies commonly recognized as successful regardless of industry.
        Here’s what we found, in no particular order:
      </Text>
      <View className="flex flex-row flex-wrap justify-evenly flex-auto">
        {strategies.map((item) => {
          return (
            <View
              key={item.title}
              className="flex-shrink md:basis-5/12 border border-primary p-5 flex flex-col rounded active:bg-violet-600 mt-10"
            >
              <MotiPressable
                animate={({ hovered, pressed }) => {
                  'worklet'

                  return {
                    scale: hovered || pressed ? 1.05 : 1,
                  }
                }}
              >
                <Text className="mx-5 mb-4 md:mx-10 text-center -mt-8 bg-white border-primary border rounded text-secondary py-2 text-lg lg:text-2xl">
                  {item.title}
                </Text>
                <Image
                  source={item.source}
                  accessibilityLabel={item.title}
                  className="h-24 w-24"
                />
                <Text className="text-gray-600 text-md mt-4">
                  {item.description}
                </Text>
              </MotiPressable>
            </View>
          )
        })}
      </View>
    </View>
  )
}

export default HomeMarketingStrategies
