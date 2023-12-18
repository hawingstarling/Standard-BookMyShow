import { Sizes } from '@/Theme';
import { Image, View, Text, StyleSheet } from 'react-native'
import React from 'react'

interface ItemMovieProps {
    item: {
        rateOrDays: string,
        name: string,
        subName: string,
        image: string
    }
}

const ItemMovie: React.FC<ItemMovieProps> = ({ 
    item
}) => {
    
    return ( 
        <>
            <Image 
                source={{ uri: item.image }} 
                style={{width: 113, height: 180, borderRadius: 8}} 
                resizeMode={'cover'} 
            />
            <View>
                <Image source={{ uri: item.rateOrDays }} style={Styles.infoEvent} />
                <View style={{paddingTop: 4}}>
                    <Text style={Styles.name}>{item.name}</Text>
                    <Text style={Styles.subName}>{item.subName}</Text>
                </View>
            </View>
        </>
     );
}

const Styles = StyleSheet.create({
    infoEvent: {
        marginTop: 4,
        width: 113,
        height: 23
    },
    name: {
        paddingTop: 4,
        marginBottom: 2,
        fontSize: 12
    },
    subName: {
        fontSize: 12, 
        color: 'rgb(85, 85, 85)'
    }
})

export default ItemMovie;