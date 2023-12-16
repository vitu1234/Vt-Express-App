import {Pressable, Text, View, StyleSheet} from "react-native";

const CategoryItem = ({category_name, bgColor,textColor, onPress}) => {
    return (
        <View style={styles.categoryItemContainer}>
            <Pressable android_ripple={{color: "#ced474"}} onPress={onPress} style={{...styles.pressableView, backgroundColor: bgColor}}>
                <View style={styles.categoryItemInnerContainer}>
                    <Text
                        style={{...styles.title, color: textColor}}
                        numberOfLines={1} ellipsizeMode='tail'
                        >{category_name}</Text>
                </View>
            </Pressable>
        </View>
    )
};
const styles = StyleSheet.create({
    categoryItemContainer: {
        marginEnd: 10,
        borderRadius: 8,
        overflow: 'hidden', // Ensure that content doesn't overflow when adjusting height
    },
    pressableView: {
        flex: 1,
    },
    categoryItemInnerContainer: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 16, // Adjusted padding for a more balanced look
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        // color: 'black',
        fontSize: 14, // Adjusted font size for better readability
        fontWeight: 'bold',
    },
});
export default CategoryItem;