import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    TextInput,
    StyleSheet,
    ImageBackground,
    Dimensions,
    KeyboardAvoidingView,
    Keyboard,
    TouchableWithoutFeedback,
    ActivityIndicator
  } from "react-native";
  import MainText from "../components/UI/MainText";
  import HeadingText from "../components/UI/HeadingText";


export default class Auth extends Component {
    render() {
        return (
            // <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
                <KeyboardAvoidingView style={styles.container} behavior="padding">
                    <MainText>
                        <HeadingText>Sign In</HeadingText>
                    </MainText>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.inputContainer}>
                        <DefaultInput
                            placeholder="Identifiant"
                            style={styles.input}
                            touched={this.state.controls.email.touched}
                            autoCapitalize="none"
                            autoCorrect={false}
                            keyboardType="email-address"
                        />
                    </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            // </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      },
})
