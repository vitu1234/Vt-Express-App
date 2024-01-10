import {View, ScrollView, Image, Text, Button, FlatList, Dimensions, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import ProductDetailsTabs from "./productDetailsTabs";
import ProductsRandom from "../../Home/products/productsRandom";

const ProductDetailView = () => {
    return (
        <View style={styles.container}>
            <FlatList style={styles.flatlistContainer} ListHeaderComponent={
                <View>
                    <Image style={styles.image} source={{uri: 'https://via.placeholder.com/640x640/228B22'}}/>
                    <View style={styles.info}>
                        <View style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}>
                            <Text style={styles.name}>Product Name</Text>
                            <View style={{flexDirection: 'row'}}>
                                <MaterialCommunityIcons name="star" color={'#2196F3'} size={19}/>
                                <Text style={{fontWeight: 'bold', fontSize: 16}}>4.9</Text>
                                <Text style={{fontSize: 16}}>(130)</Text>
                            </View>
                        </View>

                        <Text style={{color: '#7e7e7e'}}>Category </Text>
                        <Text style={styles.price}>MWK 150,000.00</Text>
                        <ProductDetailsTabs/>


                        <ProductsRandom/>
                    </View>


                </View>
            }
            />
            <View style={styles.positionInBottom}>
                <View style={{
                    flexDirection: 'row',
                    marginTop: 10,
                    marginBottom: 20,
                    padding: 16
                }}>
                    <TouchableOpacity >
                        <MaterialCommunityIcons name="heart-outline" color={'#2196F3'} size={34}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.outlinedButton} onPress={() => {
                    }}>
                        <Text style={styles.buttonText}>Add to Cart</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{...styles.outlinedButton, backgroundColor: '#2196F3'}} onPress={() => {
                    }}>
                        <Text style={{...styles.buttonText,color:'#fff'}}>Buy Now</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
};

const styles = {
    container: {
        backgroundColor: '#fff',
        // height: '100%',
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
        backgroundColor: '#fff',
        zIndex: 100,
        borderWidth: 1,
        borderColor: '#ccc',
        // borderStyle:''
    },


    outlinedButton: {
        flex:1,

        borderWidth: 1,
        borderColor: '#2196F3',
        borderRadius: 5,
        paddingVertical: 8,
        paddingHorizontal: 12,
        marginStart: 23
    },
    buttonText: {

        color: '#2196F3',
        textAlign: 'center'
    },
};

export default ProductDetailView;