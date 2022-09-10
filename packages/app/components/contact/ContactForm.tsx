import { View, TextInput, Text } from 'react-native'
import { Button } from '../button'

export function ContactForm() {
  return (
    <View className="flex mt-10 md:w-2/5">
      <Text className="text-4xl font-semibold text-primary mb-10">
        Send a Message
      </Text>

      <View className="flex flex-col md:flex-row mb-10 w-full ios:md:w-5/12 android:md:w-5/12">
        <TextInput
          placeholder="First name"
          className="py-3 px-5 bg-blue-50 focus:outline-none rounded-lg text-gray-500 w-full mb-10 md:mb-0 md:mr-10"
        />

        <TextInput
          placeholder="Last name"
          className="py-3 px-5 bg-blue-50 focus:outline-none rounded-lg text-gray-500 w-full"
        />
      </View>

      <View className="flex flex-col md:flex-row mb-10 w-full ios:md:w-5/12 android:md:w-5/12">
        <TextInput
          placeholder="Email"
          className="py-3 px-5 bg-blue-50 focus:outline-none rounded-lg text-gray-500 w-full mb-10 md:mb-0 md:mr-10"
        />

        <TextInput
          placeholder="Phone Number"
          className="py-3 px-5 bg-blue-50 focus:outline-none rounded-lg text-gray-500 w-full"
        />
      </View>

      <View className="flex mb-10">
        <TextInput
          multiline
          numberOfLines={5}
          placeholder="Message"
          className="py-3 px-5 bg-blue-50 focus:outline-none rounded-lg text-gray-500 w-full"
        />
      </View>

      <View className="flex flex-row justify-end">
        <Button
          // pressableClassName="component bg-violet-500 hover:bg-violet-600 active:bg-violet-700"
          // textClassName="font-bold component-active:font-extrabold"
          pressableClassName="px-5 py-3 bg-secondary rounded max-w-max flex-row justify-center"
          textClassName="text-xl text-white"
          text="Send A Message"
        />
      </View>
    </View>
  )
}
