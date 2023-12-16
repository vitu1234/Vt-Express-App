import {Text, View, StyleSheet, SafeAreaView, ScrollView} from "react-native";
import Search from "../../components/Home/search";
import CarouselCards from "../../components/Home/carousel/CarouselCards";

export default function Home() {
    return (
        <ScrollView>
            <View style={styles.homeContainer}>

                <Search/>

                <SafeAreaView style={styles.carouselContainer}>
                    <CarouselCards/>
                </SafeAreaView>
                <View style={{flex: 1}}></View>

            </View>
        </ScrollView>
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