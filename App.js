import {StatusBar} from 'expo-status-bar';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Search from "./screens/Search";
import MyPage from "./screens/MyPage";
import Cart from "./screens/Cart";
import Wishlist from "./screens/Wishlist";
import Home from "./screens/Home";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {DrawerActions as navigation} from "@react-navigation/routers/src/DrawerRouter";
import {DefaultTheme} from "react-native-paper";
import ProductDetails from "./screens/product/productDetails";


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTabs() {
    return (<Tab.Navigator

    >
        <Tab.Screen options={{
            headerLeft: () => (
                <MaterialCommunityIcons
                    name="menu"  // Change this to the desired icon name
                    size={24}
                    style={{marginLeft: 16, padding: 8}} // Adjust padding as needed
                    onPress={() => alert('Menu: Could be categories')}  // Add the desired action for the header left button
                />
            ),
            headerRight: () => (
                <MaterialCommunityIcons
                    name="bell"  // Change this to the desired icon name
                    size={24}
                    style={{marginRight: 16, padding: 8}} // Adjust padding as needed
                    onPress={() => alert('Notifications')}  // Add the desired action for the header left button
                />
            ),
            tabBarLabelStyle: {
                // Font size of tab text
            },
            tabBarActiveTintColor: '#2196F3', // Color of the active tab
            tabBarInactiveTintColor: '#000', // Color of inactive tabs

            headerTitleStyle: {
                fontWeight: 900, // Make the title bold
            },
            title: 'Zathu Express',
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons name="home" color={color} size={size}/>
            ),
        }} name="home" component={Home}/>

        <Tab.Screen options={{
            tabBarLabelStyle: {
                // Font size of tab text
            },
            tabBarActiveTintColor: '#2196F3', // Color of the active tab
            tabBarInactiveTintColor: '#000', // Color of inactive tabs
            title: 'Search',
            tabBarLabel: 'Search',
            tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons name="magnify" color={color} size={size}/>
            ),
        }} name="search" component={Search}/>

        <Tab.Screen options={{
            tabBarLabelStyle: {
                // Font size of tab text
            },
            tabBarActiveTintColor: '#2196F3', // Color of the active tab
            tabBarInactiveTintColor: '#000', // Color of inactive tabs
            title: 'My Page',
            tabBarLabel: 'My Page',
            tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons name="account" color={color} size={size}/>
            ),
        }} name="mypage" component={MyPage}/>

        <Tab.Screen options={{
            tabBarLabelStyle: {
                // Font size of tab text
            },
            tabBarActiveTintColor: '#2196F3', // Color of the active tab
            tabBarInactiveTintColor: '#000', // Color of inactive tabs
            title: 'Cart',
            tabBarLabel: 'Cart',
            tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons name="cart" color={color} size={size}/>
            ),
        }} name="cart" component={Cart}/>
    </Tab.Navigator>);
}

export default function App() {
    const MyTheme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            background: '#F0F1F9FF',
        }
    };

    return (
        <View style={styles.container}>
            <StatusBar style="auto"/>
            <NavigationContainer theme={MyTheme}>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Home"
                        component={BottomTabs}
                        options={{
                            headerShown: false
                        }}
                    />
                    {/*<Stack.Screen name="mypage" component={Home}/>*/}
                    <Stack.Screen name="search" component={Search}/>
                    <Stack.Screen name="wishlist" component={Wishlist}/>
                    <Stack.Screen
                        options={{
                            title: 'Product Details',
                            headerRight: () => (

                                <TouchableOpacity style={{
                                    flexDirection: 'row',
                                    justifyContent: 'flex-end',
                                    alignItems: 'flex-start'
                                }}>
                                    <MaterialCommunityIcons name="cart" color={'#2196F3'} size={32}/>
                                    <View style={{
                                        marginStart: -12,
                                        marginTop: -12,
                                        backgroundColor: '#2196F3',
                                        padding: 3,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: 60, // Set to half of the width and height
                                        width: 30, // Adjust as needed
                                        height: 30, // Adjust as needed
                                        paddingStart: 5,
                                        paddingEnd: 5
                                    }}>
                                        <Text style={{
                                            textAlign: 'center',
                                            color: '#fff',
                                            fontWeight: '700',
                                            fontSize: 10
                                        }}>109</Text>
                                    </View>


                                </TouchableOpacity>

                            )
                        }}
                        name="product_details"
                        component={ProductDetails}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: '#fff', // alignItems: 'center',
        justifyContent: 'center',
    },
});
