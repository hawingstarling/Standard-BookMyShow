import { Dimensions } from 'react-native'
import { Colors } from './Colors'
import { DefaultTheme, DarkTheme } from '@react-navigation/native'

// export const getAppTheme = () => ({
//   default: {
//     Colors,
//     Images: getImages(),
//     NavigationTheme: DefaultTheme,
//   },
// })

const { width, height } = Dimensions.get('window')

export const Sizes = {
  width,
  height,
}

export const Spacing = {
  s: 8,
  m: 18,
  l: 24,
  xl: 40
}