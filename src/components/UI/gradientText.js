import React from 'react'
import { View, StyleSheet } from "react-native";
import Svg, {
    LinearGradient,
    Text,
    Defs,
    Stop,
    TSpan
} from 'react-native-svg';

const GradientText = ({ text1, text2 }) => {
    return (
        <View style={styles.wrap}>
            <Svg viewBox="0 0 300 300" height="300" width="300">
                <Defs>
                    <LinearGradient id="rainbow" x1="0" x2="50%" y1="0" y2="100%" gradientUnits="userSpaceOnUse" >
                        <Stop stopColor="#BF245A" offset="0%" />
                        <Stop stopColor="#EE813C" offset="50%" />
                        <Stop stopColor="#F6C552" offset="100%" />
                    </LinearGradient>
                </Defs>
                <Text fill="url(#rainbow)" style={styles.title}>
                    <TSpan fonSize="72" x="30" dy="140">
                        {text1}
                    </TSpan>
                    <TSpan fonSize="72" x="90" dy="30">
                        {text2}
                    </TSpan>
                </Text>
            </Svg>
        </View>
    )
}

const styles = StyleSheet.create({
    wrap: {
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "center"
    },
})

export default GradientText