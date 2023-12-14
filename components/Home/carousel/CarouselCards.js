import {Text, View} from "react-native";
import {SliderBox} from "react-native-image-slider-box";

const CarouselCards = () => {
    const images = [
        "https://source.unsplash.com/1024x768/?nature",
        "https://source.unsplash.com/1024x768/?water",
        "https://source.unsplash.com/1024x768/?girl",
        "https://source.unsplash.com/1024x768/?tree", // Network image
        require('../../../assets/adaptive-icon.png'),          // Local image
    ]

    return (
        <View style={{height: 200}}>
            <SliderBox
                dotColor="#2196F3"
                // inactiveDotColor="#90A4AE"
                autoplay={true}
                circleLoop={true}
                paginationBoxVerticalPadding={20}
                images={images}
                onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                ImageComponentStyle={{borderRadius: 10, width: '87%'}}

                paginationBoxStyle={{
                    position: "absolute",
                    bottom: 0,
                    padding: 0,
                    alignItems: "center",
                    alignSelf: "center",
                    justifyContent: "center",
                    paddingVertical: 10,
                    backgroundColor:'rgba(0,0,0,0.74)'
                }}
            />

        </View>
    );
};

export default CarouselCards;