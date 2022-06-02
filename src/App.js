import React from 'react'
import {
    Image,
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    StatusBar,
} from 'react-native'

const colorGithub = '#010409'
const colorFont = '#c9d1d9'
const colorDark = '#4f565e'
const imageProfile = 'https://avatars.githubusercontent.com/u/65117375?v=4'
const App = () => {
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
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
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
        fontWeight: 'thin',
    },
})
