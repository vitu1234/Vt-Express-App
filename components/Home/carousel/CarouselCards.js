import {Text, View} from "react-native";
import { SliderBox } from "react-native-image-slider-box";

const CarouselCards = () => {
    const images = [
        "https://source.unsplash.com/1024x768/?nature",
        "https://source.unsplash.com/1024x768/?water",
        "https://source.unsplash.com/1024x768/?girl",
        "https://source.unsplash.com/1024x768/?tree", // Network image
        require('../../../assets/adaptive-icon.png'),          // Local image
    ]

    return (
        <View>
            <SliderBox images={images} />

        </View>
    );
};

export default CarouselCards;