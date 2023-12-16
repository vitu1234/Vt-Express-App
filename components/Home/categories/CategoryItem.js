import {Pressable, Text, View} from "react-native";

const CategoryItem = ({title, bgColor}) => {
    return (
        <View style={styles.categoryItemContainer}>
            <Pressable android_ripple={{color: "#ced474"}} style={{...styles.pressableView, backgroundColor: bgColor}}>
                <View style={styles.categoryItemInnerContainer}>
                    <Text
                        numberOfLines={1} ellipsizeMode='tail'
                        style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
};
const styles = StyleSheet.create({
    categoryItemContainer: {
        flex: 1,
        margin: 10,
        height: 20,
        borderRadius: 8

    },
    pressableView: {
        flex: 1
    },
    categoryItemInnerContainer: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }, title: {
        color: 'black',
        fontSize: 12,
        fontWeight: 'bold'
    }
})
export default CategoryItem;