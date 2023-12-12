import {Text, View, StyleSheet, SafeAreaView} from "react-native";
import Search from "../../components/Home/search";
import CarouselCards from "../../components/Home/carousel/CarouselCards";

export default function Home() {
    return (
        <View style={styles.homeContainer}>
            {/*<Text>Homescreen</Text>*/}
            <Search/>
            <SafeAreaView style={styles.container}>
                <CarouselCards/>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    homeContainer: {
        padding: 16,
        backgroundColor: '#F0F1F9FF',
        flex: 1
    },
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
        // padding: 50
    },
})