import React, { Component } from 'react';
import { Text, StyleSheet, View, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Slider } from 'react-native-elements';
import { Card, Body, Content } from 'native-base';
import RNPickerSelect from 'react-native-picker-select';
import { Ionicons } from '@expo/vector-icons';

export default class headerSearch extends Component {
    state = {
        favSport4: null
    }

    render() {
        return (
            <ImageBackground 
                source={require('../../constants/images/marocback.png')} 
                style={styles.search}
                imageStyle={{ width: "70%", marginLeft: "30%" }}
            >
                <Text>Adresse</Text>
                <View style={{
                    borderWidth: 1,
                    borderColor: 'gray',
                    borderRadius: 4,
                }}>
                    <RNPickerSelect
                        placeholder={placeholder}
                        items={sports}
                        onValueChange={value => {
                        this.setState({
                            favSport4: value,
                        });
                        }}
                        style={{
                            ...styles.pickerSelectStyles,
                            iconContainer: {
                                top: 10,
                                right: 12,
                            },
                        }}
                        value={this.state.favSport4}
                        useNativeAndroidPickerStyle
                        textInputProps={{ underlineColor: 'yellow' }}
                        Icon={() => {
                        return <Ionicons name="md-arrow-down" size={24} color="gray" />;
                        }}
                    />
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    search: {
        height: 200,
        width: "100%"
    },
    pickerSelectStyles: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        color: 'black',
        paddingRight: 30,
    }
})
