import {Dimensions, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {CheckBox} from "react-native-btr/src/Components/CheckBox";
import {useState} from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const {width} = Dimensions.get('window');
const previewCount = 2;
const itemWidth = width / (previewCount + 0.5);

const CartItem = ({item, handleOnPressProduct}) => {
    const [checkedStatus, setCheckedStatus] = useState(true)

    const format = (amount) => {
        return Number(amount)
            .toFixed(2)
            .replace(/\d(?=(\d{3})+\.)/g, '$&,');
    };

    const toggleCheckBox = (itemId) => {
        if (checkedStatus === true) {
            setCheckedStatus(false)
        } else {
            setCheckedStatus(true)
        }
    }

    const addItemQty = (itemId) => {

    }

    const minusItemQty = (itemId) => {

    }

    return (
        <View style={styles.view}>
            <TouchableOpacity onPress={handleOnPressProduct}>
                <Image source={{uri: item.image}} style={styles.image}/>
            </TouchableOpacity>
            <View style={styles.itemContainer}>
                <TouchableOpacity onPress={handleOnPressProduct}>
                    <Text numberOfLines={1} ellipsizeMode='tail' style={styles.title}>
                        {item.title}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleOnPressProduct}>
                    <Text numberOfLines={1} ellipsizeMode='tail' style={styles.subtitle}>
                        {item.subtitle}
                    </Text>
                </TouchableOpacity>
                <Text numberOfLines={1} ellipsizeMode='tail' style={styles.price}>
                    {item.currency} {format(item.price)}
                </Text>
            </View>
            <View style={styles.qtyCancelMainContainer}>
                <View style={styles.checkboxContainer}>

                    {/*<CheckBox*/}
                    {/*    onPress={() => toggleCheckBox(item.id)}*/}
                    {/*    checked={checkedStatus}*/}
                    {/*    color={'#347af0'}*/}
                    {/*/>*/}
                    {/*<TouchableOpacity onPress={() => addItemQty(item.id)}*/}
                    {/*                  style={{...styles.iconButton, alignItems: 'end'}}>*/}
                    {/*    <MaterialCommunityIcons name="trash-can-outline" color={'#fff'} size={12}/>*/}
                    {/*</TouchableOpacity>*/}


                    <Text style={{color: '#fff'}}>Stzl</Text>
                    <TouchableOpacity onPress={() => addItemQty(item.id)} style={{
                        ...styles.iconButton, backgroundColor: '#fff',
                        marginHorizontal: 1
                    }}>
                        <CheckBox
                            onPress={() => toggleCheckBox(item.id)}
                            checked={checkedStatus}
                            color={'#347af0'}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => minusItemQty(item.id)}
                                      style={{...styles.iconButton, backgroundColor: 'red'}}>
                        <MaterialCommunityIcons name="trash-can-outline" color={'#fff'} size={12}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.qtyContainer}>
                    <TouchableOpacity onPress={() => addItemQty(item.id)} style={styles.iconButton}>
                        <MaterialCommunityIcons name="plus" color={'#fff'} size={12}/>
                    </TouchableOpacity>
                    <Text style={styles.qtyText}>{item.qty}</Text>
                    <TouchableOpacity onPress={() => minusItemQty(item.id)}
                                      style={{...styles.iconButton, backgroundColor: 'red'}}>
                        <MaterialCommunityIcons name="minus" color={'#fff'} size={12}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 17,
        marginTop: 3,
        borderRadius: 10,
        backgroundColor: '#fff',
        elevation: 1
    },
    itemContainer: {
        padding: 16,
        justifyContent: "flex-start",
        flexDirection: "column",

        flex: 1,
        left: 2
    },
    image: {
        width: 90,
        height: 100,
        resizeMode: "cover",
        borderRadius: 5,
    },
    title: {
        fontWeight: "bold",
        fontSize: 16,
    },
    subtitle: {
        fontSize: 14,
        color: "gray",
        marginBottom: 3,
    },
    price: {
        // backgroundColor: '#fff',
        fontWeight: "900",
        fontSize: 15,
        color: '#347af0',
        bottom: 10,
        paddingStart: 16,
        position: 'absolute',

    },
    qtyCancelMainContainer: {
        flexDirection: "column",
        backgroundColor: "#fff",
        // position: 'relative', // Make sure it establishes a positioning context for absolute child
        // alignItems: 'flex-start', // Align children to the top
    },
    checkboxContainer: {
        // flexDirection: 'row',
        // alignItems: 'center',
        marginTop: 10,

        // backgroundColor:'red',
        flexDirection: 'row',
        // alignItems: 'center',
        // marginTop: 18,
        // flex: 1
    }, qtyContainer: {
        // backgroundColor:'red',
        flexDirection: 'row',
        // alignItems: 'center',
        // marginTop: 18,
        // flex: 1
    },
    iconButton: {
        backgroundColor: '#2196F3',
        padding: 8,
        borderRadius: 5,
        marginHorizontal: 5,
    },
    qtyText: {
        fontSize: 16,
        marginHorizontal: 8,
        fontWeight: 'bold'
    },
});

export default CartItem;
