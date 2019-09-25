import React from 'react';
import { StyleSheet } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { AppLoading } from 'expo';
// import {Asset} from 'expo-asset';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

import AuthScreen from './src/screens/Auth';
import ProjectScreen from './src/screens/Project';

const images = [];

export default class App extends React.Component  {
  constructor (props) {
    super(props);
    this.state = {
      isLoadingComplete: false,
    }
  }
  
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isLoadingComplete: true });
  }

  render(){
    const MainNavigator = createAppContainer(
      createBottomTabNavigator({
        auth : { screen: AuthScreen },
        main : { 
          screen: createStackNavigator({
            Project: { screen: ProjectScreen }
          },{
            headerMode: "none"
          })
        }
      },{
        defaultNavigationOptions:{
          tabBarVisible: false
        },
        lazy: true
      })
    );
    if(!this.state.isLoadingComplete) {
        return (
            <AppLoading />
        )
    }
    return (
      <MainNavigator />
    );
  }
}

const styles = StyleSheet.create({});
