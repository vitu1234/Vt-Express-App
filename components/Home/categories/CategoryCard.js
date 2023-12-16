import {View, StyleSheet, FlatList, ScrollView, Pressable, Text} from "react-native";
import CategoryItem from "./CategoryItem";


function createRandomColour1() {
    let letters = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }

    return color
}

function createRandomColour() {
    const minValue = 45; // Adjust this value to control darkness

    const getRandomValue = () => Math.floor(minValue + Math.random() * (255 - minValue + 1));

    const r = getRandomValue();
    const g = getRandomValue();
    const b = getRandomValue();

    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    const textColor = luminance > 0.6 ? 'black' : 'white';

    // Ensure that the background color is dark
    const backgroundColor = `rgb(${r}, ${g}, ${b})`;

    return {backgroundColor, textColor};
}


const handleCategoryOnPress = (categoryId) => {
    // navigation.navigate('productDetails',
    //     {
    //         productId: productId
    //     })
    console.log('Pressed category: ', categoryId)
}

const CategoryCard = () => {


    const categories = [
        {
            id: 1,
            category_name: 'Fashion/Clothing',
            icon: ''
        },
        {
            id: 2,
            category_name: 'Beauty',
            icon: ''
        },
        {
            id: 3,
            category_name: 'Maternity/Childcare',
            icon: ''
        },
        {
            id: 4,
            category_name: 'Food',
            icon: ''
        },
        {
            id: 5,
            category_name: 'Kitchen Utensils',
            icon: ''
        },
        {
            id: 6,
            category_name: 'Household Goods',
            icon: ''
        },
        {
            id: 7,
            category_name: 'Sports/Leisure',
            icon: ''
        },
        {
            id: 8,
            category_name: 'Home Appliances',
            icon: ''
        }
    ]

    return (
        <View style={styles.categoryMainContainer}>
            {/*<View style={styles.btnAll}>*/}
            {/*    <Pressable android_ripple={{color: "#ced474"}} onPress={() => handleCategoryOnPress('All')}*/}
            {/*               style={{...styles.pressableView, backgroundColor: "#1565C0", borderWidth: 2, borderColor: 'white'}}>*/}
            {/*        <View style={styles.btnItemInnerContainer}>*/}
            {/*            <Text style={styles.title}*/}
            {/*                  numberOfLines={1} ellipsizeMode='tail'*/}
            {/*            >All</Text>*/}
            {/*        </View>*/}
            {/*    </Pressable>*/}
            {/*</View>*/}


            <FlatList data={categories} horizontal={true} showsHorizontalScrollIndicator={false}
                      showsVerticalScrollIndicator={false}
                      renderItem={({item}) => {
                          const {backgroundColor, textColor} = createRandomColour();
                          return (
                              <CategoryItem
                                  bgColor={backgroundColor}
                                  textColor={textColor}
                                  category_name={item.category_name}
                                  onPress={() => handleCategoryOnPress(item.id)}
                              />
                          );
                      }}
                      keyExtractor={(itemData) => itemData.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    categoryMainContainer: {
        flex: 1,
        flexDirection: 'row',
        marginEnd: 16,
        marginStart: 5,
        marginTop: 16,
        borderRadius: 8
    },
    btnAll: {

        marginEnd: 10,
        borderRadius: 8,
        overflow: 'hidden',
    },
    categoryItemContainer: {
        marginEnd: 10,
        borderRadius: 8,
        overflow: 'hidden', // Ensure that content doesn't overflow when adjusting height
    },
    pressableView: {
        flex: 1,
    },
    btnItemInnerContainer: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 16, // Adjusted padding for a more balanced look
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: '#fff',
        fontSize: 14, // Adjusted font size for better readability
        fontWeight: 'bold',
    },
})

export default CategoryCard;