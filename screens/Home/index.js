import {Text, View, StyleSheet} from "react-native";
import Search from "../../components/Home/search";

export default function Home() {
    return (
        <View style={styles.homeContainer}>
            {/*<Text>Homescreen</Text>*/}
            <Search/>
        </View>
    );
}

const styles = StyleSheet.create({
    homeContainer:{
        padding: 16,
        backgroundColor: '#F0F1F9FF',
        flex: 1
    }
})