import LottieView from 'lottie-react-native'
import { styled } from 'nativewind'
const StyledLottie = styled(LottieView)

export default function LottieComponent({
  lottieDocument,
}: {
  lottieDocument: string
}) {
  let lottieSource: any
  // With react Native we cannot read local documents on the fly
  // The problem is that Android put the documents in a special folder
  // And React.Native when it sees that we have put require or import
  // it copies the document.
  // Any other solution like trying to use Axios or react-native-fs don't work
  switch (lottieDocument) {
    case 'marketing.json':
      lottieSource = require(`../../assets/lottie/marketing.json`)
      break
    case 'forget-password.json':
      lottieSource = require(`../../assets/lottie/forget-password.json`)
      break
    case 'review-clients.json':
      lottieSource = require(`../../assets/lottie/review-clients.json`)
      break
    default:
      break
  }
  try {
    return (
      <>
        {!lottieSource ? null : (
          <StyledLottie
            source={lottieSource}
            autoPlay
            loop
            className="w-full"
          />
        )}
      </>
    )
  } catch (error) {
    console.log(`Lottie: ${lottieDocument}:`, error)
    return null
  }
}
