

import { Sizes } from "@/Theme";
import { FlatList, TouchableOpacity, View , Image, Text, StyleSheet, ViewabilityConfig, ViewToken, Animated, Easing } from "react-native";
import { EvilIcons } from '@expo/vector-icons';
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import ItemBanner from "./ItemBanner";

interface SwiperProps {
    data?: string[],
}


const Swiper: React.FC<SwiperProps> = (
    { 
        data, 
    }
) => {

    const animatedValue = React.useRef(new Animated.Value(0)).current

    const AdsBanner = [
        'https://assets-in.bmscdn.com/promotions/cms/creatives/1702555573361_flashsaleapp.jpg',
        'https://assets-in.bmscdn.com/promotions/cms/creatives/1700994278153_2wedfgnm.jpg',
        'https://assets-in.bmscdn.com/promotions/cms/creatives/1701423606592_lollapaloozaapp.jpg',
        'https://assets-in.bmscdn.com/promotions/cms/creatives/1702630911316_zakirapphyd.jpg'
    ]
    const [current, setCurrent] = React.useState<number>(0);
    const [activeBannerIndex, setActiveBannerIndex] = React.useState<number>(0);
    const viewabilityConfig: ViewabilityConfig = {
        itemVisiblePercentThreshold: 0
    }
    const onViewableItemsChanged = React.useRef(({ viewableItems }: {viewableItems: Array<ViewToken>}) => {
        if (viewableItems.length > 0) {
            setActiveBannerIndex(viewableItems[0].index || 0)
        }
    })
    const BannerRef = React.useRef<FlatList>(null)
    const lengthBanner = AdsBanner.length

    // TODO: Next Carousel Button
    const NextCarousel = () => {
        setCurrent(current < lengthBanner - 1 ? current + 1 : 0)
        BannerRef.current?.scrollToIndex(
            { index: current, animated: true }
        )
    }

    // TODO: Previous Carousel Button
    const PreviousCarousel = () => {
        setCurrent(current ? current - 1 : lengthBanner - 1)
        BannerRef.current?.scrollToIndex(
            { index: current, animated: true }
        )
    }

    // TODO: Duration Timer Slide
    React.useEffect(() => {
        let timer = setTimeout(() => {
            NextCarousel()
        }, 3000); 
        
        return () => {
            clearTimeout(timer)
        }
    }, [current]);


    React.useEffect(() => {
        BannerRef.current?.scrollToIndex({ index: current, animated: true })
    }, [current])

    // TODO: Timing Animate Pagination
    React.useEffect(() => {
        Animated.timing(animatedValue, {
            toValue: 36,
            duration: 3000,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: false
        }).start(() => {
            animatedValue.setValue(0)
        })
    }, [current, animatedValue])

    return ( 
        <View 
            style={{position: 'relative'}}
        >
            <TouchableOpacity 
                style={Styles.buttonPrevious}
                onPress={PreviousCarousel}
            >
                <EvilIcons name="chevron-left" size={40} color="white" />
            </TouchableOpacity>
            <TouchableOpacity 
                style={Styles.buttonNext}
                onPress={NextCarousel}
            >
                <EvilIcons name="chevron-right" size={40} color="white" />
            </TouchableOpacity>
            <FlatList
                horizontal
                ref={BannerRef}
                data={AdsBanner}
                scrollEnabled={false}
                decelerationRate="fast"
                style={{flexGrow: 0, height: 180}}
                viewabilityConfig={viewabilityConfig}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(_, index) => `key-${index.toString()}`}
                onViewableItemsChanged={onViewableItemsChanged.current}
                renderItem={({item, index}) => {
                    return (
                        <View key={index}>
                            <ItemBanner 
                                item={item}
                            />
                        </View>
                    )
                }}
            />

            <View style={Styles.swiperPagination}>
                {AdsBanner.map(({}, index: number) => {
                    return (
                        <View 
                            key={index}
                            style={[Styles.swiperPaginationBullet]}
                        >
                            <View style={Styles.i} />
                                <Animated.View
                                    style={[
                                        Styles.b, 
                                        {width: index === current ? animatedValue : 0}
                                    ]}
                                />
                                {/* <LinearGradient 
                                    colors={
                                        ['rgba(255, 255, 255, 0.5)', 'rgb(255, 255, 255)']
                                    }
                                    style={Styles.b}
                                    start={{x:0, y: 0}}
                                    end={{x: 1, y: 0}}
                                /> */}
                            {/* </Animated.View> */}
                        </View>
                    )
                })}
            </View>
        
        </View>
    );
}

const Styles = StyleSheet.create({
    buttonNext: {
        width: 40, 
        height: 40, 
        position: 'absolute', 
        top: '40%', 
        right: 0, 
        zIndex: 2,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8
    },
    buttonPrevious: {
        width: 40, 
        height: 40, 
        position: 'absolute', 
        top: '40%', 
        left: 0, 
        zIndex: 2,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8
    },
    swiperPagination: {
        position: 'absolute',
        width: '100%',
        height: 20,
        bottom: 8,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    swiperPaginationBullet: {
        position: 'relative',
        width: 36,
        height: 2,
        marginRight: 4,
    },
    i: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        zIndex: 1,
        width: '100%',
        height: 2,
        backgroundColor: 'rgba(255, 255, 255, 0.5)'
    },
    b: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        zIndex: 2,
        // width: '0%',
        height: 2,
        backgroundColor: 'rgb(255, 255, 255)'
    }
})

export default Swiper;