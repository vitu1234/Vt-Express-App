import React, {useEffect, useRef} from "react";
import {View, StyleSheet, FlatList, Image, Text, Animated, Dimensions, TouchableOpacity} from "react-native";
import {ExpandingDot} from "react-native-animated-pagination-dots";
import {NumericFormat} from "react-number-format";
import ProductCardHorizontal from "../../common/products/productCardHorizontal";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {useNavigation} from "@react-navigation/native";

const {width} = Dimensions.get('window');
const previewCount = 2;
const itemWidth = width / (previewCount + .5);
const startScroll = (itemWidth * 3 / 4);

const ProductItem = () => {
    const data = [
        {
            id: "1",
            image: "https://www.bootdey.com/image/1260x750/8A2BE2/000000",
            title: "Cute Cate",
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

    const navigation = useNavigation()
    const flatlistRef = React.useRef();
    const snapToOffsetsLikeGooglePlay = data.map((x, i) => {
        return ((i * itemWidth) + startScroll)
    })
    const handleSeeMorePress = () => {
        // Add your navigation logic or action here
        console.log("See More clicked");
    };


    const scrollX = React.useRef(new Animated.Value(0)).current;

    const handleOnPressProduct = (id) => {
        navigation.navigate('product_details',
            {
                productId: id
            })
    }


    return (
        <View style={styles.container}>
            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                // paddingHorizontal: 16, // Adjust as needed
                marginTop: 8, // Adjust as needed
            }}>
                <Text style={styles.leftText}>Branded products you might like</Text>
                <TouchableOpacity onPress={handleSeeMorePress}>
                    <Text style={styles.rightText}>See More <MaterialCommunityIcons
                        name="greater-than" size={16}/>
                    </Text>
                </TouchableOpacity>

            </View>
            <FlatList

                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                ref={flatlistRef}
                pagingEnabled={true}
                horizontal={true}
                decelerationRate={0}
                snapToOffsets={snapToOffsetsLikeGooglePlay}
                snapToAlignment={"center"}
                data={data}
                // renderItem={renderItem}
                renderItem={({item, index}) => (

                    <ProductCardHorizontal handleOnPressProduct={()=>handleOnPressProduct(item.id)} item={item}/>
                )
                }
            />
        </View>
    );


    // return (
    //     <View style={styles.container}>
    //         <View style={{flexDirection: 'column'}}>
    //             <Text>Do you like these products?</Text>
    //             <Text>>></Text>
    //         </View>
    //         <FlatList
    //             showsHorizontalScrollIndicator={false}
    //             onScroll={Animated.event(
    //                 [{nativeEvent: {contentOffset: {x: scrollX}}}],
    //                 {
    //                     useNativeDriver: false,
    //                 }
    //             )}
    //             pagingEnabled={true}
    //             decelerationRate={"normal"}
    //             scrollEventThrottle={10}
    //             horizontal
    //             data={data}
    //             contentContainerStyle={styles.flatListContainer}
    //             renderItem={renderItem}
    //             keyExtractor={(item) => item.id}
    //         />
    //         <ExpandingDot
    //             data={data}
    //             expandingDotWidth={30}
    //             scrollX={scrollX}
    //             inActiveDotOpacity={0.6}
    //             dotStyle={styles.paginationDotStyle}
    //             containerStyle={styles.paginationContainer}
    //         />
    //     </View>
    // );
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

export default ProductItem;
