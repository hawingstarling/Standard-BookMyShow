import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'


type SubTitle = 'default' | 'scandal' | 'comingsoon'
type Background = 'default' | 'light' | 'dark'

interface EventMovieProps {
    title: string,
    subTitle?: string,
    subTitleStyle?: string,
    seeAll?: string,
    isMore?: boolean,
    background?: string,
    wrapperRadius?: boolean,
    children: React.ReactNode
}

const SubTitle: { [key in SubTitle]: any } = {
    default: {
        fontSize: 12,
        fontWeight: '400',
        color: 'rgb(102, 102, 102)',
    },
    scandal: {
        fontSize: 14,
        fontWeight: '400',
        color: 'rgb(102, 102, 102)',
    },
    comingsoon: {
        fontSize: 14,
        fontWeight: '400',
        color: 'rgb(62, 110, 234)',
    },
}

const Background: { [key in Background]: any } = {
    default: {},
    light: {
        backgroundColor: 'white'
    },
    dark: {
        backgroundColor: 'rgb(43, 49, 72)'
    }
}

const EventMovie: React.FC<EventMovieProps> = ({
    title = 'Header BookMyShow',
    subTitle = 'SubTitle',
    subTitleStyle = 'comingsoon',
    seeAll = 'See All',
    isMore = true,
    background = 'default',
    wrapperRadius = false,
    children,
    ...props
}) => {
    return (
        <View>
            <View style={Styles.eventMovies}>
                <Text style={Styles.title}>
                    {title}
                </Text>
                {isMore && (
                    <TouchableOpacity>
                        <Text style={Styles.seeAll}>{seeAll} &#8250;</Text>
                    </TouchableOpacity>
                )}
            </View>
            <Text style={[Styles.subTitle, SubTitle[subTitleStyle as SubTitle]]}>{subTitle}</Text>
            {children}
        </View>
    );
}

const Styles = StyleSheet.create({
    eventMovies: {
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        paddingLeft: 16, 
        paddingRight: 16
    },
    title: {
        fontSize: 18,
        fontWeight: '500',
    },
    seeAll: {
        fontSize: 14,
        color: '#F84464'
    },
    subTitle: {
        paddingLeft: 16,
        paddingRight: 16
    }
})

export default EventMovie;