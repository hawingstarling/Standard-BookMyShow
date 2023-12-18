import { Sizes } from '@/Theme';
import { Image, View, Text, StyleSheet } from 'react-native'
import React from 'react'

interface ItemBannerProps {
    item: string,
}

const ItemBanner: React.FC<ItemBannerProps> = ({ 
    item
}) => {
    
    return ( 
        <>
            <Image 
                source={{ uri: item }} 
                style={{ width: Sizes.width, height: 180 }} 
                resizeMode={'cover'} 
            />
            <View>
                <Image style={Styles.infoEvent} />
                <Text></Text>
            </View>
        </>
     );
}

const Styles = StyleSheet.create({
    infoEvent: {
        
    }
})

export default ItemBanner;