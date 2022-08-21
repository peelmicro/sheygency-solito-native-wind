import { useLottie, LottieOptions } from 'lottie-react'

export default function LottiComponent({
  lottiDocument,
}: {
  lottiDocument: string
}) {
  try {
    const animationData = require(`../../assets/lottie/${lottiDocument}`)
    if (!animationData) {
      return null
    }
    const options: LottieOptions = {
      animationData,
      loop: true,
      autoplay: true,
    }
    // const style = {
    //   height: '500px',
    //   width: '500px',
    // }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { View } = useLottie(options)
    // const { View } = useLottie(options, style)
    // const { View } = useLottie(options)

    return View
  } catch (error) {
    console.log(`Lotti: ${lottiDocument}:`, error)
    return null
  }
}
