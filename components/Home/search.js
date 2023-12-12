import {SafeAreaView, Text, StyleSheet, TextInput, View, Button, Pressable} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


export default function Search() {
    return (
        <View style={styles.searchContainer}>
            <SafeAreaView style={{flex: 1, height: 44}}>
                <TextInput
                    style={styles.input}
                    placeholder="Search products..."
                />
            </SafeAreaView>

            <Pressable
                style={({pressed}) => [
                    styles.filterPressable,
                    {backgroundColor: pressed ? '#1565C0' : '#000'}, // Change background color on press
                ]}
                onPress={() => {
                    // Add functionality for when the button is pressed
                    console.log('Button pressed!');
                }}
            >
                <MaterialCommunityIcons color={'#fff'} style={styles.filterBtn} name="tune-variant" size={30}/>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center', // Align items vertically in the center
        padding: 12, // Add padding for spacing
        // backgroundColor:'#fff',
    },
    input: {
        flex: 1, // Take up remaining space
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 8,
        marginRight: 8, // Add margin to separate input and button
        height: 40,
        backgroundColor: 'white',
        elevation: 1,
        borderColor: '#ffffff',
        shadowColor: "black"
    },
    filterBtn: {},
    filterPressable: {
        elevation: 1,
        borderRadius: 5,
        padding: 6,
        shadowColor: 'black',
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: "#ffffff"
    },
});