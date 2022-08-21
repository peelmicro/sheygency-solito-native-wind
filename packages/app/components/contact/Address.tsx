import { styled } from 'nativewind'
import { View, Text } from 'react-native'
import Building from '../../assets/icons/building'
import Mail from '../../assets/icons/mail'
import Phone from '../../assets/icons/phone'

const StyledMail = styled(Mail, {
  classProps: ['color'],
})
const StyledBuilding = styled(Building, {
  classProps: ['color'],
})
const StyledPhone = styled(Phone, {
  classProps: ['color'],
})

export function Address() {
  return (
    <View className="bg-primary rounded-3xl w-full p-10 md:w-1/2 md:mr-10">
      <Text className=" text-white text-3xl mb-10 font-semibold">
        Get In Touch
      </Text>
      <Text className="text-white mb-10">
        SHEYGENCY is a digital marketing agency, we provide marteking and
        development services
      </Text>

      <View className="flex flex-row mb-10 items-center">
        <View className="h-12 w-12 bg-[#ffa60021] p-2 rounded mr-5 flex justify-center">
          <StyledBuilding height={36} width={36} color="text-secondary" />
        </View>
        <View>
          <Text className="text-white font-semibold text-xl">Visit US</Text>
          <Text className="text-white">Hyderabd , Amberpet , India</Text>
        </View>
      </View>

      <View className="flex flex-row mb-10 items-center">
        <View className="h-12 w-12 bg-[#ffa60021] p-2 rounded mr-5 flex justify-center items-center">
          <StyledMail height={36} width={36} color="text-secondary" />
        </View>
        <View>
          <Text className="text-white font-semibold text-xl">Mail US</Text>
          <Text className="text-white">sathyaprakasView95@gmail.com</Text>
        </View>
      </View>

      <View className="flex flex-row mb-10 items-center">
        <View className="h-12 w-12 bg-[#ffa60021] p-2 rounded mr-5 flex justify-center">
          <StyledPhone height={36} width={36} color="text-secondary" />
        </View>
        <View>
          <Text className="text-white font-semibold text-xl">Call US</Text>
          <Text className="text-white">9989649278</Text>
        </View>
      </View>
    </View>
  )
}
