import {Text, View, StyleSheet, TouchableOpacity, Image, FlatList} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

function ReviewsList(props) {
    const items = [
        {
            id: 1,
            avatar: "https://www.bootdey.com/img/Content/avatar/avatar3.png",
            name: "Vitumbiko Mafeni",
            date: "01 Jan 2023",
            rating: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\n" +
                "                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud\n" +
                "                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatc.",
            stars: 3
        },
        {
            id: 2,
            avatar: "https://www.bootdey.com/img/Content/avatar/avatar4.png",
            name: "John Doe",
            date: "01 Jan 2023",
            rating: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
            stars: 3.4
        },
        {
            id: 3,
            avatar: "https://www.bootdey.com/img/Content/avatar/avatar5.png",
            name: "John Smith",
            date: "30 Dec 2022",
            rating: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\n" +
                "                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud\n" +
                "                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatc.",
            stars: 4
        },
        {
            id: 4,
            avatar: "https://www.bootdey.com/img/Content/avatar/avatar6.png",
            name: "James Bond",
            date: "30 Dec 2022",
            rating: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\n" +
                "                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud\n" +
                "                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatc.",
            stars: 2.6
        },
        {
            id: 5,
            avatar: "https://www.bootdey.com/img/Content/avatar/avatar7.png",
            name: "John Smith",
            date: "28 Dec 2022",
            rating: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\n" +
                "                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud\n" +
                "                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatc.",
            stars: 3
        }
    ];

    const renderItem = ({item}) => {
        return (
            <TouchableOpacity style={styles.itemContainer}>
                {/*<Image source={{uri: item.coverPhoto}} style={styles.coverPhoto}/>*/}
                <View style={styles.avatarContainer}>
                    <Image source={{uri: item.avatar}} style={styles.avatar}/>
                    <View style={styles.avatarContainerNameRates}>
                        <Text style={styles.name}>{item.name}</Text>
                        <View style={styles.starsContainer}>
                            <MaterialCommunityIcons name="star" color={'#2196F3'} size={19}/>
                            <MaterialCommunityIcons name="star" color={'#2196F3'} size={19}/>
                            <MaterialCommunityIcons name="star" color={'#2196F3'} size={19}/>
                        </View>
                    </View>
                    <Text style={styles.dateContainer}>{item.date}</Text>

                </View>
                <View style={styles.descriptionContainer}>
                    <Text style={styles.descriptionText}>{item.rating}</Text>
                </View>

            </TouchableOpacity>

        )
    }

    return (
        <FlatList
            data={items}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        padding: 5,
        alignItems: 'center',
        // marginTop: 50,
        marginBottom: 10,
        shadowColor: '#cccccc',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        // marginHorizontal: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingBottom: 20,
        // flexDirection:'row'
    },
    coverPhoto: {
        width: '100%',
        height: 60,
        resizeMode: 'cover',
    },
    avatarContainer: {
        // alignItems: 'center',
        // marginTop: -35,
        // flex:1
        width: '100%',
        // backgroundColor: '#ccc',
        flexDirection: 'row'
    },
    avatarContainerNameRates: {},
    descriptionContainer: {
        // flex:1
        padding: 2
    },
    descriptionText:{
        textAlign:'justify'
    },
    starsContainer: {
        flexDirection: 'row'
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 30,
        borderWidth: 5,
        borderColor: 'white',
    },
    name: {
        marginTop: 5,
        fontSize: 14,
        fontWeight: 'bold',
    },
    dateContainer: {
        position:'absolute',
        top: 8,
        right: 0,
        // fontWeight: 'bold',
        fontSize: 14,
    }
});

export default ReviewsList;