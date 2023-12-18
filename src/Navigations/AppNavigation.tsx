import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { RouteName } from "./RouteName"
import HomeScreen from "@/Screens/HomeScreen"
import { useFonts } from "expo-font"
import { SplashScreen } from "expo-router"
import { Text } from 'react-native'
import HeaderMovie from "@/Components/HeaderMovie"

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
    const [loaded, error] = useFonts({
        inter: require('../Assets/Fonts/Inter-Regular.ttf'),
        'inter-semibold': require('../Assets/Fonts/Inter-SemiBold.ttf'),
        'inter-bold': require('../Assets/Fonts/Inter-Bold.ttf'),
    })

    React.useEffect(() => {
       if (error) throw error 
    }, [error]);

    React.useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync()
        }
    }, [loaded])

    if (!loaded) return null

    return (
        <BookMyShow />
    )
}

const Stack = createNativeStackNavigator()

export const BookMyShow = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={RouteName.HomeScreen}
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen 
                    name={RouteName.HomeScreen} 
                    component={HomeScreen} 
                    options={{
                        header: () => <HeaderMovie />
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
