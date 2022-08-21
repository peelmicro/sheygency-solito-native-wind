import { ScrollView } from 'react-native'
import { Intro } from '../../components/about/Intro'
import { WhatWeDo } from '../../components/about/WhatWeDo'
import { WhyChooseUs } from '../../components/about/WhyChooseUs'
import { SafeAreaView } from 'react-native-safe-area-context'

export function AboutScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Intro />
        <WhatWeDo />
        <WhyChooseUs />
      </ScrollView>
    </SafeAreaView>
  )
}
