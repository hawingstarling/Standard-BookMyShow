import { StatusBar } from "expo-status-bar";
import { ImagesBMS } from "../Assets/Images/Home";
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Image,
    useColorScheme
} from "react-native";

function Splash() {
    const isDarkMode = useColorScheme() === 'dark'

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style={!isDarkMode ? 'light' : 'dark'} />
            <View style={styles.splash}>
                <View style={{ width: '100%', height: '35%' }} />
                <View style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'space-between', padding: 60 }}>
                    <Image source={ImagesBMS.BookMyShow} style={{ width: 65, height: 65, borderRadius: 5}} />
                    <Text style={styles.h1Splash}>BookMyShow</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F84464',
        alignItems: 'center',
        justifyContent: 'center',
    },
    splash: {
        display: 'flex',
        width: '100%',
        height: '100%'
    },
    h1Splash: {
        fontWeight: '600',
        fontSize: 25,
        color: '#fff'
    }
});

export default Splash;