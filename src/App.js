import React from 'react'
import {
    Pressable,
    Image,
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Linking,
    StatusBar,
} from 'react-native'

const colorGithub = '#010409'
const colorFont = '#c9d1d9'
const colorDark = '#4f565e'
const imageProfile = 'https://avatars.githubusercontent.com/u/65117375?v=4'
const linkProfile = 'https://github.com/Glen1986'
const App = () => {
    const handlePress = async () => {
        const res = await Linking.canOpenURL(linkProfile)
        if (res) {
            await Linking.openURL(linkProfile)
        }
    }
    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={colorGithub} barStyle="light-content" />
            <View style={style.content}>
                <Image
                    accessibilityLabel="Glen en vila Olymopia"
                    style={style.avatar}
                    source={{ uri: imageProfile }}
                />
                <Text style={[style.defaultText, style.name]}>
                    Glen Escobar
                </Text>
                <Text style={[style.defaultText, style.nickName]}>
                    escobar.glen@gmail.com
                </Text>
                <Text style={[style.defaultText, style.nickName]}>
                    FronEnd Developoer
                </Text>
                <Pressable onPress={handlePress}>
                    <View style={style.button}>
                        <Text style={[style.defaultText]}>open in GitHub</Text>
                    </View>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

export default App

const style = StyleSheet.create({
    container: {
        backgroundColor: colorGithub,
        flex: 1,
    },
    content: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 40,
    },
    avatar: {
        height: 200,
        width: 200,
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 100,
    },
    defaultText: {
        color: 'white',
    },
    name: {
        fontSize: 30,
        fontWeight: '700',
    },
    nickName: {
        color: colorDark,
        fontSize: 20,
        fontWeight: 'normal',
    },
    button: {
        backgroundColor: colorDark,
        padding: 10,
        borderRadius: 10,
        margin: 10,
    },
})
