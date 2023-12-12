import {StatusBar} from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';
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
                <MaterialCommunityIcons name="magnify" size={24}/>
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
            tabBarIcon: () => (
                <MaterialCommunityIcons name="account" size={24}/>
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
            tabBarIcon: () => (
                <MaterialCommunityIcons name="cart" size={24}/>
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
