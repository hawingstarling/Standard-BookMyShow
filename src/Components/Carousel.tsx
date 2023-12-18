import { Sizes } from "@/Theme";
import { FlatList, TouchableOpacity, View , Image, Text, StyleSheet, ViewabilityConfig, ViewToken, Animated, Easing } from "react-native";
import React from "react";
import ItemCard from "./ItemBanner";
import ItemMovie from "./ItemMovie";

interface CarouselProps {
    data?: string[],
    isBanner?: boolean
}

const Carousel: React.FC<CarouselProps> = (
    { 
        data, 
        isBanner = true
    }
) => {

    const AdsBanner = [
        { 
            rateOrDays: 'https://assets-in.bmscdn.com/discovery-catalog/icons/tr:l-image,i-discovery-catalog@@icons@@big-star-202212021156.png,lx-30,ly-22,w-0.5,l-end:l-text,ie-OC4z,fs-48,ff-Roboto,lx-90,ly-15,pa-15_0_0_0,l-end:l-text,ie-NDQ3LjFL,fs-48,ff-Roboto,lx-190,ly-15,pa-15_0_0_0,l-end:l-text,ie-dm90ZXM,fs-48,ff-Roboto,lx-345,ly-15,co-747EAA,pa-15_0_0_0,l-end/bottom-band-new-202212010458.png',
            image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00311762-zjjwutxtls-portrait.jpg',
            subName: 'Action/Crime/Drama',
            name: 'Animal'
        },
        {
            rateOrDays: 'https://assets-in.bmscdn.com/discovery-catalog/icons/tr:l-image,i-discovery-catalog@@icons@@big-star-202212021156.png,lx-30,ly-22,w-0.5,l-end:l-text,ie-OC45,fs-48,ff-Roboto,lx-90,ly-15,pa-15_0_0_0,l-end:l-text,ie-NzUuMks%3D,fs-48,ff-Roboto,lx-212,ly-15,pa-15_0_0_0,l-end:l-text,ie-dm90ZXM,fs-48,ff-Roboto,lx-345,ly-15,co-747EAA,pa-15_0_0_0,l-end/bottom-band-new-202212010458.png',
            image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00310187-nbqbszhvcm-portrait.jpg',
            subName: 'Action/Crime/Drama',
            name: 'Sam Bahadur'
        },
        {
            rateOrDays: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00350871-zfnqpxakpg-portrait.jpg',
            image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00350871-zfnqpxakpg-portrait.jpg',
            subName: 'Action/Crime/Drama',
            name: 'Jhimma 2'
        },
        {
            rateOrDays: 'https://assets-in.bmscdn.com/discovery-catalog/icons/tr:l-image,i-discovery-catalog@@icons@@big-star-202212021156.png,lx-30,ly-22,w-0.5,l-end:l-text,ie-OC43,fs-48,ff-Roboto,lx-90,ly-15,pa-15_0_0_0,l-end:l-text,ie-Mi45Sw%3D%3D,fs-48,ff-Roboto,lx-245,ly-15,pa-15_0_0_0,l-end:l-text,ie-dm90ZXM,fs-48,ff-Roboto,lx-345,ly-15,co-747EAA,pa-15_0_0_0,l-end/bottom-band-new-202212010458.png',
            image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00331568-bjypcwuvyz-portrait.jpg',
            subName: 'Action/Crime/Drama',
            name: 'Wonka'
        }
    ]
   
    return ( 
        <View 
            style={{
                position: 'relative', 
                marginTop: 16,
                paddingLeft: 16, 
                paddingRight: 16
            }}
        >
            <FlatList
                horizontal
                data={AdsBanner}
                decelerationRate="fast"
                style={{flexGrow: 0}}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(_, index) => `key-${index.toString()}`}
                renderItem={({item, index}) => {
                    return (
                        <View key={index} style={{width: 113, marginRight: 8}}>
                            <ItemMovie
                                item={item}
                            />
                        </View>
                    )
                }}
            />
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

export default Carousel;