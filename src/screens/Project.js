import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Slider } from 'react-native-elements';

export default class Project extends Component {
    state = {
        value : null
    }

    static navigationOptions = {
        tabBarVisible: false
    }
    render() {
        return (
            // <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>
            //     <Slider
            //         value={this.state.value}
            //         onValueChange={value => this.setState({ value })}
            //     />
            //     <Text>Value: {this.state.value}</Text>
            // </View>
            <View style={{ flex: 1, marginTop: "6.5%" }}>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({})
