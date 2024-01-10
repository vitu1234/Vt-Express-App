import {FlatList, Text, View} from "react-native";
import CartItem from "./cartItem";


function CartView() {
    const data = [
        {
            id: "1",
            image: "https://www.bootdey.com/image/1260x750/8A2BE2/000000",
            title: "Cute Cate",
            subtitle: "Feline friend",
            price: 1000,
            currency: 'MWK',
            qty: 1,
            available: 3
        },
        {
            id: "2",
            image: "https://www.bootdey.com/image/1260x750/5F9EA0/000000",
            title: "Majestic Mountain",
            subtitle: "Natural wonder",
            price: 3000,
            currency: 'MWK',
            qty: 2,
            available: 13
        },
        {
            id: "3",
            image: "https://www.bootdey.com/image/1260x750/FF7F50/000000",
            title: "Delicious Pizza",
            subtitle: "Yum!",
            price: 120000,
            discount_percent: 9,
            currency: 'MWK',
            qty: 4,
            available: 23
        },
        {
            id: "4",
            image: "https://www.bootdey.com/image/1260x750/00FFFF/000000",
            title: "Beautiful Beach",
            subtitle: "Paradise",
            price: 109900,
            discount_percent: 9,
            currency: 'MWK',
            qty: 1,
            available: 1
        },
        {
            id: "5",
            image: "https://www.bootdey.com/image/1260x750/FF00FF/000000",
            title: "Crazy Concert",
            subtitle: "Rock on!",
            price: 123000,
            discount_percent: 1,
            currency: 'MWK',
            qty: 1,
            available: 20
        },
        {
            id: "6",
            image: "https://www.bootdey.com/image/1260x750/FF1FF/000000",
            title: "Crazy Costume for Men",
            subtitle: "Enjoy the customized costume for Halloween!",
            price: 123000,
            discount_percent: 1,
            currency: 'MWK',
            qty: 1,
            available: 20
        },
    ];

    const handleOnPressProduct = (id) => {
        console.log('Product CART Clicked: ', id)

    }
    return (
        <View>
            <FlatList

                // showsHorizontalScrollIndicator={false}
                // showsVerticalScrollIndicator={false}
                // ref={flatlistRef}
                // pagingEnabled={true}
                // horizontal={true}
                // decelerationRate={0}
                // snapToOffsets={snapToOffsetsLikeGooglePlay}
                // snapToAlignment={"center"}
                // numColumns={2}
                data={data}
                // renderItem={renderItem}
                renderItem={({item, index}) => (

                    <CartItem handleOnPressProduct={() => handleOnPressProduct(item.id)} item={item}/>
                )
                }
            />
        </View>
    );
}

export default CartView;