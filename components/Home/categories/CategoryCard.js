import {View, StyleSheet, FlatList, ScrollView} from "react-native";


function createRandomColour() {
    let letters = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }

    return color
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
            <ScrollView horizontal={true} style={{width: "100%"}}>
                <FlatList data={categories}
                          renderItem={(itemData) => <CategoryCard bgColor={createRandomColour()}
                                                                  title={itemData.item.category_name}
                                                                  onPress={() => handleCategoryOnPress(itemData.item.id)}/>}
                          keyExtractor={(itemData) => itemData.id}

                />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    categoryMainContainer: {
        flex: 1,
        margin: 16,
        height: 160,
        borderRadius: 8
    }
})

export default CategoryCard;