import CartView from "../../components/cart/cartView";
import React from 'react';
import {Dimensions, FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {CheckBox} from "react-native-btr/src/Components/CheckBox";
import {useState} from "react";

const {width} = Dimensions.get('window');
const previewCount = 2;
const itemWidth = width / (previewCount + 0.5);

export default function Cart() {


    return (
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                style={{marginBottom: 65}}
                ListHeaderComponent={
                    <CartView/>
                }
            />
            <View style={styles.positionInBottom}>
                <View style={{
                    flexDirection: 'row',
                    marginTop: 10,
                    marginBottom: 10,
                    // padding: 16
                }}>


                    <TouchableOpacity style={{...styles.outlinedButton, backgroundColor: '#2196F3'}} onPress={() => {
                    }}>
                        <Text style={{...styles.buttonText, color: '#fff'}}>Checkout</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
}
const styles = {
    container: {
        // backgroundColor: '#fff',
        height: '100%',
        flexDirection: 'row'
    },
    flatlistContainer: {
        flex: 1,
        marginBottom: 70
    },
    image: {
        width: '100%',
        aspectRatio: 1,
    },
    info: {
        padding: 20,
    },
    name: {
        fontSize: 19,
        fontWeight: '500',
        marginBottom: 5,
    },
    price: {
        fontSize: 16,
        color: '#2196F3',
        marginBottom: 20,
    },
    positionInBottom: {
        position: 'absolute',
        // left: 10, // Adjusted left property
        // right: 10, // Added right property
        width: '100%', // Adjusted width with -20 on both sides
        bottom: 0,
        // backgroundColor: '#fff',
        zIndex: 100,
        borderWidth: 1,
        borderColor: 'rgba(204,204,204,0.29)',
        // borderStyle:''

    },


    outlinedButton: {
        flex: 1,

        borderWidth: 1,
        borderColor: '#2196F3',
        borderRadius: 5,
        paddingVertical: 8,
        paddingHorizontal: 12,
        marginStart: 7,
        marginEnd: 7,
    },
    buttonText: {

        color: '#2196F3',
        textAlign: 'center'
    },
};


