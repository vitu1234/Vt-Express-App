import {Text, View, StyleSheet, SafeAreaView, ScrollView, FlatList} from "react-native";
import Search from "../../components/Home/search";
import CarouselCards from "../../components/Home/carousel/CarouselCards";
import CategoryCard from "../../components/Home/categories/CategoryCard";
import ProductItem from "../../components/Home/products/productItem";
import ProductsRandom from "../../components/Home/products/productsRandom";
import ProductCardHorizontal from "../../components/common/products/productCardHorizontal";


export default function Home() {


    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            // nestedScrollEnabled={true}
            keyboardDismissMode={'on-drag'}
            // keyExtractor={item => item.id}
            style={styles.homeContainer}
            ListHeaderComponent={
                <View>

                    <Search/>

                    <SafeAreaView style={styles.carouselContainer}>
                        <CarouselCards/>
                    </SafeAreaView>
                    <SafeAreaView>
                        <CategoryCard/>
                    </SafeAreaView>
                    <SafeAreaView>
                        <ProductItem/>
                    </SafeAreaView>

                    {/*<View style={{flex: 1}}></View>*/}

                </View>
            }
            ListFooterComponent={<View>
                <ProductsRandom/>
            </View>}

        >

        </FlatList>
    );

}

const styles = StyleSheet.create({
    homeContainer: {
        padding: 16,
        backgroundColor: '#F0F1F9FF',
        flex: 1
    },
    carouselContainer: {
        // paddingStart:55,
        // paddingEnd:55,
        // flex: 1,
        // marginTop: 10,
        // backgroundColor: '#fff',
        alignItems: 'center',
        borderColor: '#fff'
        // justifyContent: 'center'w
        // padding: 50
    },
})