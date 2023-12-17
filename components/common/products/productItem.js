import React from "react";
import {View, StyleSheet, FlatList, Image, Text, Animated, Dimensions} from "react-native";
import {ExpandingDot} from "react-native-animated-pagination-dots";

const ProductItem = () => {
    const data = [
        {
            id: "1",
            image: "https://www.bootdey.com/image/1260x750/8A2BE2/000000",
            title: "Cute Catejejkr rjr",
            subtitle: "Feline friend",
        },
        {
            id: "2",
            image: "https://www.bootdey.com/image/1260x750/5F9EA0/000000",
            title: "Majestic Mountain",
            subtitle: "Natural wonder",
        },
        {
            id: "3",
            image: "https://www.bootdey.com/image/1260x750/FF7F50/000000",
            title: "Delicious Pizza",
            subtitle: "Yum!",
        },
        {
            id: "4",
            image: "https://www.bootdey.com/image/1260x750/00FFFF/000000",
            title: "Beautiful Beach",
            subtitle: "Paradise",
        },
        {
            id: "5",
            image: "https://www.bootdey.com/image/1260x750/FF00FF/000000",
            title: "Crazy Concert",
            subtitle: "Rock on!",
        },
    ];
    const SCREEN_WIDTH = Dimensions.get("window").width;

    const renderItem = ({item}) => {
        return (
            <View style={{...styles.itemContainer, width: SCREEN_WIDTH}}>
                <Image source={{uri: item.image}} style={styles.image}/>
                <View style={styles.textContainer}>
                    <Text numberOfLines={1} ellipsizeMode='tail' style={styles.title}>{item.title}</Text>
                    <Text numberOfLines={1} ellipsizeMode='tail' style={styles.subtitle}>{item.subtitle}</Text>
                </View>
            </View>
        );
    };

    const scrollX = React.useRef(new Animated.Value(0)).current;

    return (
        <View style={styles.container}>
            <View style={{flexDirection:'column'}}>
                <Text>Do you like these products?</Text>
                <Text >>></Text>
            </View>
            <FlatList
                showsHorizontalScrollIndicator={false}
                onScroll={Animated.event(
                    [{nativeEvent: {contentOffset: {x: scrollX}}}],
                    {
                        useNativeDriver: false,
                    }
                )}
                pagingEnabled={true}
                decelerationRate={"normal"}
                scrollEventThrottle={10}
                horizontal
                data={data}
                contentContainerStyle={styles.flatListContainer}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
            <ExpandingDot
                data={data}
                expandingDotWidth={30}
                scrollX={scrollX}
                inActiveDotOpacity={0.6}
                dotStyle={styles.paginationDotStyle}
                containerStyle={styles.paginationContainer}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    flatListContainer: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    itemContainer: {
        padding: 16,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
    },
    image: {
        width: "100%",
        height: 200,
        resizeMode: "cover",
        borderRadius: 8,
    },
    textContainer: {
        padding: 16,
    },
    title: {
        width: 250,
        fontWeight: "bold",
        fontSize: 18,

    },
    subtitle: {
        fontSize: 14,
        color: "gray",
    },
    paginationContainer: {
        position: "absolute",
        bottom: 20,
        // left: 0,
        // right: 0,
        alignItems: 'center'
    },
    paginationDotStyle: {
        width: 10,
        height: 5,
        borderRadius: 5,
        marginHorizontal: 8,
        backgroundColor: "#347af0",
    },
});

export default ProductItem;
