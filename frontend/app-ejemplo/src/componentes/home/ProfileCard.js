import React from "react";
import {View, Text, StyleSheet, Image, Linking,TouchableWithoutFeedback} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const twitter = <Icon name={'twitter'} size={30} color={'black'}/>
const facebook = <Icon name={'twitch'} size={30} color={'black'}/>
const instagram = <Icon name={'github'} size={30} color={'black'}/>
const linkedin = <Icon name={'linkedin'} size={30} color={'black'}/>
const tiktok = <Icon name={'youtube-play'} size={30} color={'black'}/>
const tiktok2 = <Icon name={'ellipsis-h'} size={30} color={'black'}/>
const ProfileCard = () => {
    const user = {
        avatar: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
        coverPhoto: "https://wallpapercave.com/wp/wp3278587.jpg",
        name: "Edgar Wladimir Teran Moran"
    }
    return (
        <View style={styles.container}>
            <Image source={{uri: user.coverPhoto}} style={styles.coverPhoto}/>
            <View style={styles.avatarContainer}>
                <Image source={{uri: user.avatar}} style={styles.avatar}/>
                <Text style={styles.name}>
                    {user.name}
                </Text>
            </View>
            <View style={styles.buttonContainer}>

                <TouchableWithoutFeedback style={styles.touchable} onPress={() => {
                    Linking.openURL('https://www.twitch.tv/edgar1709')
                }}>
                    {facebook}
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback style={styles.touchable} onPress={() => 
                    Linking.openURL('https://twitter.com/EdgarTe60022452')
                }>
                    {twitter}
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback style={styles.touchable} onPress={() => 
                    Linking.openURL('https://github.com/EdgarTeran77')
                }>
                    {instagram}
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback style={styles.touchable} onPress={()=>Linking.openURL('https://www.linkedin.com/in/edgar-teran-685165217/')}>
                    {linkedin}
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback style={styles.touchable} onPress={()=>Linking.openURL('https://www.youtube.com/@eddyydanny6309')}>
                    {tiktok}
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback style={styles.touchable} onPress={()=>Linking.openURL('https://www.tiktok.com/@edgarteran09')}>
                    {tiktok2}
                </TouchableWithoutFeedback>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    touchable: {
        cursor: 'pointer'
    },
    container: {
        width: '50%',
        alignItems: 'center' //flex y grid
    },
    coverPhoto: {
        width: '100%',
        height: 200,
        resizeMode: 'cover'

    },
    avatarContainer: {
        alignItems: 'center',
        marginTop: -75
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 75,
        borderWidth: 10,
        borderColor: 'white'
    },
    name: {
        marginTop: 15,
        fontSize: 20,
        fontWeight: 'bold'
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 20,
        width: '60%',
        justifyContent: 'space-between'
    }
});
export default ProfileCard