import RootLayout from '@/Navigations/AppNavigation';
import Splash from './src/Screens/SplashScreen';
import { StyleSheet, Text, View } from 'react-native';
import HeaderMovie from '@/Components/HeaderMovie';

export default function App() {
  return (
    // <Splash />
    // <RootLayout />
    <HeaderMovie />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
