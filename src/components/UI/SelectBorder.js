import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import RNPickerSelect from 'react-native-picker-select';
import { Ionicons } from '@expo/vector-icons';

const sports = [
    {
        label: 'Football',
        value: 'football',
    },
    {
        label: 'Baseball',
        value: 'baseball',
    },
    {
        label: 'Hockey',
        value: 'hockey',
    },
];

export default class SelectBorder extends Component {

    render() {
        const placeholder = {
            label: this.props.label,
            value: null,
            color: '#9EA0A4',
          };
        return (
            <>
                <Text>Adresse</Text>
                <View style={{
                    borderWidth: 1,
                    borderColor: 'gray',
                    borderRadius: 4,
                }}>
                    <RNPickerSelect
                        placeholder={placeholder}
                        items={sports}
                        onValueChange={value => this.props.valueChange(value)}
                        style={{
                            ...styles.pickerSelectStyles,
                            iconContainer: {
                                top: 10,
                                right: 12,
                            },
                        }}
                        value={this.props.value}
                        useNativeAndroidPickerStyle
                        textInputProps={{ underlineColor: 'yellow' }}
                        Icon={() => {
                            return <Ionicons name="md-arrow-down" size={24} color="gray" />;
                        }}
                    />
                </View>
            </>
        )
    }
}

const styles = StyleSheet.create({
    pickerSelectStyles: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        color: 'black',
        paddingRight: 30,
    }
})
