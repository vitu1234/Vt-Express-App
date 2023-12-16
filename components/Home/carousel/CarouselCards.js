import {Text, View} from "react-native";
import {SliderBox} from "react-native-image-slider-box";

const CarouselCards = () => {
    const images = [
        "https://jamonline.ph/wp-content/uploads/2021/11/asus-rog-11-11-sale-lazada-shopee.jpg",
        "https://www.supermarketnews.com/sites/supermarketnews.com/files/Product%20of%20the%20Year%20photo.png",
        'https://as2.ftcdn.net/v2/jpg/03/20/53/35/1000_F_320533595_G0VG4gC3vXXImzxBBS1Xwpxg8bfLGWqM.jpg',
        "https://thecocoapost.com/wp-content/uploads/2021/06/Nestles-unhealthy-food-products.jpeg",
        "https://i0.wp.com/d2s30hray1l0uq.cloudfront.net/frontend/Models-for-your-Product-Photography-best.jpg",
        "https://images.squarespace-cdn.com/content/v1/528f8b33e4b01f2a315145b2/1629286295054-1I6GWSF20TB4WQMQ8IG2/7.jpg"// Network image
        // require('../../../assets/adaptive-icon.png'),          // Local image
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
                    backgroundColor:'rgba(0,0,0,0.15)',
                    height: 30,

                }}
            />

        </View>
    );
};

export default CarouselCards;