import React from 'react'
import {View} from "react-native"
import Carousel, {Pagination} from 'react-native-snap-carousel'
import CarouselCardItem, {SLIDER_WIDTH, ITEM_WIDTH} from './CarouselCardItem'
import data from './data'

const CarouselCards = () => {
    const isCarousel = React.useRef(null)
    const [index, setIndex] = React.useState(0)


    return (
        <View>
            <Carousel
                autoplay={true}
                autoplayInterval={5000}

                layout="default"
                layoutCardOffset={18}
                ref={isCarousel}
                data={data}
                renderItem={CarouselCardItem}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                onSnapToItem={(index) => setIndex(index)}
                useScrollView={true}


            />
            <Pagination
                dotsLength={data.length}
                activeDotIndex={index}
                containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 8,
                    backgroundColor: 'rgba(255, 255, 255, 0.92)'
                }}
                inactiveDotStyle={{
                    // Define styles for inactive dots here
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
            />
        </View>
    )
}


export default CarouselCards