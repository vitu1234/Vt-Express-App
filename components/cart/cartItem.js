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
                    <Text numberOfLines={3} ellipsizeMode='tail' style={styles.title}>
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


                    <TouchableOpacity onPress={() => addItemQty(item.id)} style={{
                        backgroundColor: '#fff',
                        marginHorizontal: 9,
                        // padding: 5,
                        borderRadius: 5,
                        // marginBottom:8
                        margin: 8
                    }}>
                        <CheckBox
                            onPress={() => toggleCheckBox(item.id)}
                            checked={checkedStatus}
                            color={'#347af0'}
                        />
                    </TouchableOpacity>

                </View>

                <View style={styles.delBtnContainer}>
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
        // marginBottom: 17,
        marginTop: 5,
        borderRadius: 10,
        backgroundColor: '#fff',
        elevation: 1,
        height: 120,
        borderColor: 'rgba(204,204,204,0.29)',
        borderStyle: 'solid'
    },
    itemContainer: {
        padding: 16,
        justifyContent: "flex-start",
        flexDirection: "column",

        flex: 1,
        left: 2
    },
    image: {
        width: 100,
        height: 120,
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
        marginTop: 3,
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
        // backgroundColor: "green",

    },
    checkboxContainer: {
        alignItems: 'flex-end',
        // flexDirection: 'row',
        // flex: 1
        // padding:5
    },
    qtyContainer: {
        flexDirection: 'row',
        flex: 1,
        marginRight: 6
    },
    iconButton: {
        backgroundColor: '#2196F3',
        padding: 8,
        borderRadius: 5,
        marginBottom: 12
        // marginHorizontal: 5,
    },
    qtyText: {
        fontSize: 16,
        marginHorizontal: 8,
        fontWeight: 'bold',
        marginTop: 5
    },
    delBtnContainer: {
        flex: 1,
        alignItems: 'flex-end',
        marginRight: 6
    }
});

export default CartItem;
