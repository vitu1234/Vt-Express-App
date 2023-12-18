import {View, ScrollView, Image, Text, Button, FlatList} from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import ProductDetailsTabs from "./productDetailsTabs";
import ProductsRandom from "../../Home/products/productsRandom";

const ProductDetailView = () => {
    return (
        <FlatList style={styles.container}
                  ListHeaderComponent={
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
    );
};

const styles = {
    container: {
        backgroundColor: '#fff',
        height: '100%'
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
    }
};

export default ProductDetailView;