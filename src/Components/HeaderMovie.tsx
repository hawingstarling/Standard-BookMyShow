import { StatusBar } from "expo-status-bar";
import { 
    SafeAreaView, 
    View, 
    StyleSheet, 
    Text, TouchableOpacity, 
    ImageBackground, 
    ScrollView, 
    Image
} from "react-native";
import { EvilIcons } from '@expo/vector-icons';
// import { ImagesBMS } from "@/Assets/Images/Home";
import GlobalStyles from "./GlobalStyles";
import Carousel from "./Carousel";
import EventMovie from "./EventMovie";
import Swiper from "./Swiper";

function HeaderMovie() {
    const EventMovies = [
        // { Tab: ImagesBMS.Movies }, { Tab: ImagesBMS.Sports }, { Tab: ImagesBMS.MusicShows }, { Tab: ImagesBMS.Plays },
        // { Tab: ImagesBMS.ComedyShows }, { Tab: ImagesBMS.Stream }, { Tab: ImagesBMS.SeeAll }, 
        // 'Movies', 'Sports', 'Music Shows', 'Plays', 'Comedy Shows', 'Stream', 'See All'
        { Tab: 'https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/icd-movies-collection-202201201113.png' },
        { Tab: 'https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/icd-sports-collection-202201201113.png' },
        { Tab: 'https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/icd-music-shows-collection-202201201113.png' },
        { Tab: 'https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/icd-plays-collection-202201201113.png' },
        { Tab: 'https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/icd-comedy-shows-collection-202201201113.png' },
        { Tab: 'https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/icd-stream-collection-202211151255.png' },
        { Tab: 'https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/icd-see-all-collection-202201201113.png' },
    ]
    return (
        <SafeAreaView style={GlobalStyles.AndroidSafeArea}>
            <StatusBar backgroundColor="#333333" style="light" /> 
            <ImageBackground 
                source={{ uri: 'https://assets-in.bmscdn.com/discovery-catalog/collections/christmas-nye-header-collection-202312050422.png' }} 
                style={styles.container}
            >
                <View style={styles.headerContainer}>
                    <View>
                        <Text style={{ fontSize: 24, fontWeight: '700', color: 'rgb(64 64 64)', letterSpacing: -0.3 }}>
                            It All Starts Here!
                        </Text>
                        <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ color: '#F84464', paddingLeft: 1, paddingTop: 2 }}>Mumbai</Text>
                                <EvilIcons name="chevron-right" size={16} color="#F84464" />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <EvilIcons name="search" size={30} color="#F84464" />
                </View>
            </ImageBackground>
            <ScrollView style={{flex: 1, height: '100%'}}>
                <ScrollView 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{ flexGrow: 0 }}
                >
                    {EventMovies.map((item, index) => (
                        <TouchableOpacity key={index} style={{ paddingTop: 6, paddingBottom: 6 }}>
                            <Image source={{ uri: item.Tab }} style={{width: 65, height: 65}} />
                        </TouchableOpacity>
                    ))}
                </ScrollView>
                <Swiper />
                <View style={{height: 114, paddingTop: 32, paddingLeft: 16, paddingRight: 16, paddingBottom: 16}}>
                    <Image 
                        source={{ uri: 'https://assets-in.bmscdn.com/promotions/cms/creatives/1700994923699_npa.jpg'}} 
                        style={{flex: 1}}
                    />
                </View>
                <EventMovie
                    title="Recommended Movies"
                    seeAll="See All"
                    isMore={true}
                    subTitleStyle="comingsoon"
                >
                    <Carousel />
                </EventMovie>
            </ScrollView>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: 66,
        borderWidth: 1,
        borderBottomColor: 'rgb(208 213 230)',
        resizeMode: 'contain',
        paddingTop: 10,
        paddingRight: 16,
        paddingBottom: 8,
        paddingLeft: 16,
    },
    headerContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
})

export default HeaderMovie;