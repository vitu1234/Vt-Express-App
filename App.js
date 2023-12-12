import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Search from "./screens/Search";
import MyPage from "./screens/MyPage";
import Cart from "./screens/Cart";
import Wishlist from "./screens/Wishlist";
import Home from "./screens/Home";



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTabs() {
    return (<Tab.Navigator>
        <Tab.Screen options={{
            title: 'Home' + ''
        }} name="home" component={Home}/>
        <Tab.Screen options={{
            title: 'Search'
        }} name="search" component={Search}/>

        <Tab.Screen options={{
            title: 'My Page'
        }} name="mypage" component={MyPage}/>

        <Tab.Screen options={{
            title: 'Cart'
        }} name="cart" component={Cart}/>
    </Tab.Navigator>);
}

export default function App() {
    return (
        <View >
            <Text>Open up App.js to start working on your app!</Text>
            <StatusBar style="auto" />
            <Home/>
            {/*<NavigationContainer>*/}
            {/*    <Stack.Navigator>*/}
            {/*        <Stack.Screen*/}
            {/*            name="Home"*/}
            {/*            component={BottomTabs}*/}
            {/*            options={{headerShown: false}}*/}
            {/*        />*/}
            {/*        <Stack.Screen name="mypage" component={Home}/>*/}
            {/*        <Stack.Screen name="search" component={Search}/>*/}
            {/*        <Stack.Screen name="wishlist" component={Wishlist}/>*/}
            {/*    </Stack.Navigator>*/}
            {/*</NavigationContainer>*/}
        </View>
    );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
