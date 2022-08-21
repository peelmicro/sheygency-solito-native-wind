import { Pressable, PressableProps, Text } from 'react-native'

export type ButtonProps = PressableProps & {
  text: string
  pressableClassName?: string
  textClassName?: string
}

export function Button(props: ButtonProps) {
  return (
    <Pressable className={`${props.pressableClassName}`} {...props}>
      <Text className={`${props.textClassName}`}>{props.text}</Text>
    </Pressable>
  )
}
