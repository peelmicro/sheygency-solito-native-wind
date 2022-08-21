import { SafeAreaView } from 'react-native-safe-area-context'
import { View, Text, ScrollView } from 'react-native'
import { Address } from '../../components/contact/Address'
import { ContactForm } from '../../components/contact/ContactForm'
export function ContactScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="flex flex-row flex-wrap items-center justify-center mt-5 mx-5 md:mt-20">
          <Address />
          <ContactForm />
        </View>

        <View className="flex justify-center mt-32 items-center border-b-2 mx-10 mb-10">
          <View className="border-2 p-5 border-b-0 w-fit">
            <Text className="text-gray-700 text-xl">
              Designed and Developed By
            </Text>
            <Text className="text-gray-700 text-xl">Sathyaprakash Reddy</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
