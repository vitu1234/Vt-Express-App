import React, {useEffect, useRef} from "react";
import {View, StyleSheet, FlatList, Image, Text, Animated, Dimensions, TouchableOpacity} from "react-native";
import {ExpandingDot} from "react-native-animated-pagination-dots";
import {NumericFormat} from "react-number-format";
import ProductCardHorizontal from "../../common/products/productCardHorizontal";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import ProductCardVertical from "../../common/products/productCardVertical";

const {width} = Dimensions.get('window');
const previewCount = 2;
const itemWidth = width / (previewCount + .5);
const startScroll = (itemWidth * 3 / 4);

const ProductsRandom = () => {
    const data = [
        {
            id: "1",
            image: "https://www.bootdey.com/image/1260x750/8A2BE2/000000",
            title: "Cute Catejejkr rjr",
            subtitle: "Feline friend",
            price: 1000,
            currency: 'MWK'
        },
        {
            id: "2",
            image: "https://www.bootdey.com/image/1260x750/5F9EA0/000000",
            title: "Majestic Mountain",
            subtitle: "Natural wonder",
            price: 3000,
            currency: 'MWK'
        },
        {
            id: "3",
            image: "https://www.bootdey.com/image/1260x750/FF7F50/000000",
            title: "Delicious Pizza",
            subtitle: "Yum!",
            price: 120000,
            discount_percent: 9,
            currency: 'MWK'
        },
        {
            id: "4",
            image: "https://www.bootdey.com/image/1260x750/00FFFF/000000",
            title: "Beautiful Beach",
            subtitle: "Paradise",
            price: 109900,
            discount_percent: 9,
            currency: 'MWK'
        },
        {
            id: "5",
            image: "https://www.bootdey.com/image/1260x750/FF00FF/000000",
            title: "Crazy Concert",
            subtitle: "Rock on!",
            price: 123000,
            discount_percent: 1,
            currency: 'MWK'
        },
    ];
    const flatlistRef = React.useRef();
    const snapToOffsetsLikeGooglePlay = data.map((x, i) => {
        return ((i * itemWidth) + startScroll)
    })
    const handleSeeMorePress = () => {
        // Add your navigation logic or action here
        console.log("See More clicked");
    };

    const handleOnPressProduct = (id) => {
        console.log('Product Clicked: ', id)
    }


    const scrollX = React.useRef(new Animated.Value(0)).current;

    return (
        <View style={styles.container}>
            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                // paddingHorizontal: 16, // Adjust as needed
                marginTop: 8, // Adjust as needed
            }}>
                <Text style={styles.leftText}>Commonly Bought Products</Text>
                <TouchableOpacity onPress={handleSeeMorePress}>
                    <Text style={styles.rightText}>See More <MaterialCommunityIcons
                        name="greater-than" size={16}/>
                    </Text>
                </TouchableOpacity>

            </View>
            <FlatList

                // showsHorizontalScrollIndicator={false}
                // showsVerticalScrollIndicator={false}
                // ref={flatlistRef}
                // pagingEnabled={true}
                // horizontal={true}
                // decelerationRate={0}
                // snapToOffsets={snapToOffsetsLikeGooglePlay}
                // snapToAlignment={"center"}
                numColumns={2}
                data={data}
                // renderItem={renderItem}
                renderItem={({item, index}) => (

                    <ProductCardVertical handleOnPressProduct={() => handleOnPressProduct(item.id)} item={item}/>
                )
                }
            />
        </View>
    );


};

const styles = StyleSheet.create({
    container: {
        elevation: 1,
        borderRadius: 8,
        flex: 1,
        backgroundColor: "rgba(255,255,255,0.68)",
        marginTop: 20,
        padding: 10
    },
    leftText: {
        fontSize: 16,
        fontWeight: "800",
        color: "black",
    },
    rightText: {
        fontSize: 16,
        color: "#347af0",
    },
});

export default ProductsRandom;
