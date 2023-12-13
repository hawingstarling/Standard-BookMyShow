import { Colors } from './Colors'
import { DefaultTheme, DarkTheme } from '@react-navigation/native'
import { getImages } from '@Assets/Images'

export const getAppTheme = () => ({
  default: {
    Colors,
    Images: getImages(),
    NavigationTheme: DefaultTheme,
  },
})