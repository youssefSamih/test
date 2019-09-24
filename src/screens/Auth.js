import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    ImageBackground,
    KeyboardAvoidingView,
    Keyboard,
    TouchableWithoutFeedback,
    Image,
    Text
  } from "react-native";
  import { LinearGradient } from 'expo-linear-gradient';


import MainText from "../components/UI/MainText";
import HeadingText from "../components/UI/HeadingText";
import DefaultInput from '../components/UI/DefaultInput';
import ButtonWithBackground from "../components/UI/ButtonWithBackground";

export default class Auth extends Component {
    state = {
        marginAvoid: 50,
        marginCreate: 100
    }

    componentWillMount () {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
      }
    
    componentWillUnmount () {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    _keyboardDidShow = () => {
        this.setState({ marginAvoid: 0 });
        this.setState({ marginCreate: 80 });
    }

    _keyboardDidHide  = () => {
        this.setState({ marginAvoid: 50 });
        this.setState({ marginCreate: 100 });
    }


    render() {
        return (
            <ImageBackground source={require('../constants/images/background.jpg')} style={styles.backgroundImage}>
                <LinearGradient
                    // colors={['rgba(238,136,17,0.2)', 'transparent']}
                    colors={['#f6c552', '#ee813c', '#bf245a']}
                    style={{width: "100%", opacity: 0.6, flex: 1}}
                    start={[1.5, 0.6]}
                >
                    <KeyboardAvoidingView style={styles.container} behavior="height" contentContainerStyle={styles.behavior}>
                        <MainText>
                            <HeadingText style={styles.forgotPassText}>Sign In</HeadingText>
                        </MainText>
                        <View style={styles.imageContainer}>
                            <Image 
                                source={require('../constants/images/safkati.png')}
                                style={styles.logo}
                            />
                        </View>
                        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={styles.inputContainer}>
                            <DefaultInput
                                placeholder="Identifiant"
                                style={styles.input}
                                autoCapitalize="none"
                                autoCorrect={false}
                                keyboardType="email-address"
                            />
                            <View
                                style={styles.portraitPasswordContainer}
                            >
                                <View
                                    style={styles.portraitPasswordWrapper}
                                >
                                    <DefaultInput
                                        placeholder="Password"
                                        style={styles.input}
                                        secureTextEntry
                                    />
                                </View>
                            </View>
                        </View>
                        </TouchableWithoutFeedback>
                        <ButtonWithBackground
                            Backcolors={['#f6c552', '#ee813c', '#bf245a']}
                            buttonStyle={styles.buttonContianer}
                            start={[1.5, 0.6]}
                        >
                            <HeadingText style={styles.textCenter}>Sign In</HeadingText>
                        </ButtonWithBackground>
                        <View style={{ marginTop: this.state.marginAvoid }}>
                            <Text style={styles.forgotPassText}>Forgot your details ?</Text>
                        </View>
                        <MainText textStyle={{ marginTop: this.state.marginCreate }}>
                            <HeadingText style={styles.createAccountText}>Create a new account</HeadingText>
                        </MainText>
                    </KeyboardAvoidingView>
                </LinearGradient>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
        width: "100%",
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
    inputContainer: {
        width: "80%"
    },
    input: {
        backgroundColor: "transparent",
        color: "white",
        borderColor: "#F6C552",
        padding: 10,
        paddingLeft: 20
    },
    portraitPasswordContainer: {
        flexDirection: "column",
        justifyContent: "flex-start"
    },
    portraitPasswordWrapper: {
        width: "100%"
    },
    logo: {
        width: 100,
        height: 100,
        borderRadius: 100,
    },
    imageContainer: {
        marginTop: 50,
        marginBottom: 50,
        elevation:4,
        shadowOffset: { width: 5, height: 5 },
        shadowColor: "grey",
        shadowOpacity: 0.5,
        shadowRadius: 10,
    },
    // textStyle: {
    //     marginTop: this.state.marginCreate //100
    // },
    // forgotPass:{
    //     marginTop: this.state.marginAvoid //50
    // },
    forgotPassText: {
        color: "#F6C552"
    },
    buttonContianer: {
        width: "80%",
        alignItems: "center"
    },
    textCenter: {
        fontWeight: "bold",
        color: "#fff"
    },
    createAccountText: {
        color: "#fff"
    },
    behavior: {
        marginTop: 100
    }
})
