import {Dimensions, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";

const {width} = Dimensions.get('window');
const previewCount = 2;
const itemWidth = width / (previewCount + .5);
const ProductCardHorizontal = ({item, handleOnPressProduct}) => {
    const format = amount => {
        return Number(amount)
            .toFixed(2)
            .replace(/\d(?=(\d{3})+\.)/g, '$&,');
    };

    return (
        <TouchableOpacity onPress={handleOnPressProduct} style={styles.view}>
            <Image source={{uri: item.image}} style={styles.image}/>
            <View style={{...styles.itemContainer, padding: 10}}>
                <Text numberOfLines={1} ellipsizeMode='tail' style={styles.title}>{item.title}</Text>
                <Text numberOfLines={1} ellipsizeMode='tail' style={styles.subtitle}>{item.subtitle}</Text>
                <Text numberOfLines={1} ellipsizeMode='tail'
                      style={styles.price}>{item.currency} {format(item.price)}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 8,
        flex: 1,
        // backgroundColor: "rgba(255,255,255,0.41)",
        // marginTop: 13,
        // padding: 10
    },

    itemContainer: {
        // padding: 16,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
    },
    image: {
        marginTop: 10,
        width: "100%",
        height: 150,
        resizeMode: "cover",
        borderRadius: 5,
    },
    textContainer: {
        // padding: 16,
    },
    title: {
        // width: '100%',
        fontWeight: "bold",
        fontSize: 16,

    },
    subtitle: {
        fontSize: 14,
        color: "gray",
        marginBottom: 3,
        // marginTop: 3
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

    view: {
        // backgroundColor: '#000',
        width: itemWidth - 20, //20 is margin left and right
        marginLeft: 10,
        marginRight: 10,
        // marginBottom: 17,
        marginTop: 3,
        height: '100%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 60,
        fontWeight: 'bold',
        color: '#aaa',
    },
    price: {
        width: '100%',
        fontWeight: "bold",
        fontSize: 15,
        color: '#347af0',
        // marginBottom: 10,
        // paddingBottom: 10
    }
});

export default ProductCardHorizontal;