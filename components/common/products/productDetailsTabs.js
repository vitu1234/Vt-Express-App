import {View, StyleSheet, Text, TouchableOpacity, Button} from "react-native";
import {useState} from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const ProductDetailsTabs = () => {
    const [pressedTab, setPressedTab] = useState(0);
    const onPressedTab = (index) => {
        setPressedTab(index)
    }
    const renderItem = () => {
        if (pressedTab === 0) {
            return (
                <View>

                    <Text style={styles.description}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Text>
                    <View style={{flexDirection: 'row', marginTop: 10}}>
                        <TouchableOpacity >
                            <MaterialCommunityIcons  name="heart" color={'#2196F3'} size={34}/>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.outlinedButton} onPress={() => {
                        }}>
                            <Text style={styles.buttonText}>Add to Cart</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            )
        } else {
            return (
                <View>
                    <Text>Review</Text>
                </View>
            )
        }
    }
    return (
        <View>
            <View style={styles.tabButtonsMainContainer}>
                <TouchableOpacity style={styles.tabButtonsContainer} onPress={() => onPressedTab(0)}>
                    <Text style={[
                        styles.tabsButtonsTitle,
                        pressedTab === 0 && styles.activeTabText // Add styles for the active tab
                    ]}>Description</Text>
                    <View style={[
                        styles.tabsButtonsLines,
                        pressedTab === 0 && styles.activeTabLine // Add styles for the active tab
                    ]}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tabButtonsContainer} onPress={() => onPressedTab(1)}>
                    <Text style={[
                        styles.tabsButtonsTitle,
                        pressedTab === 1 && styles.activeTabText // Add styles for the active tab
                    ]}>Reviews</Text>
                    <View style={[
                        styles.tabsButtonsLines,
                        pressedTab === 1 && styles.activeTabLine // Add styles for the active tab
                    ]}/>
                </TouchableOpacity>
            </View>
            {renderItem()}

        </View>
    );
};


export default ProductDetailsTabs;

const styles = StyleSheet.create({
    tabButtonsMainContainer: {
        flexDirection: 'row'
    },
    tabButtonsContainer: {
        flexDirection: 'column',
        marginEnd: 20
    },
    tabsButtonsTitle: {
        fontSize: 19,
        textAlign: 'center',
        color: '#999'
    },
    tabsButtonsLines: {
        backgroundColor: '#999',
        height: 2,
        width: 100,
        marginTop: 6
    },
    activeTabText: {
        color: '#2196F3',
    },
    activeTabLine: {
        backgroundColor: '#2196F3',
    },
    description: {
        marginTop: 10,
        fontSize: 15,
        color: '#333',
        lineHeight: 24,
        textAlign: 'justify'
    },
    tabContentContainer: {},

    outlinedButton: {
        flex:1,

        borderWidth: 1,
        borderColor: '#2196F3',
        borderRadius: 5,
        paddingVertical: 8,
        paddingHorizontal: 12,
        marginStart:23
    },
    buttonText: {

        color: '#2196F3',
        textAlign:'center'
    },
})