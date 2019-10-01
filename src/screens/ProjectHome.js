import React, { Component } from 'react';
import { StyleSheet, View, ActivityIndicator, ScrollView, Dimensions, Text, TouchableOpacity } from 'react-native';


import HeaderNative from '../components/UI/Header';
import GradientText from "../components/UI/gradientText";
import CartMain from '../components/UI/CartMain';
import FadIn from '../components/Animations/FadIn';
import ItemMainHome from '../components/UI/ItemMainHome';
import Map from '../components/UI/map';

export default class Project extends Component {
    state = {
        value : null,
        isLoading: false,
        data: [],
        detailMaps: false,
        mapLoaded: false,
        filter: {
            address: null,
            libelle: null,
            bien: null,
            type_de_bien: null,
            piece: null,
            prix_min: 0
        },
        region: {
            // latitude: 32.128032745627436,
            latitudeDelta: 6.814511102518594,
            // longitude: -7.106224950402975,
            longitudeDelta: 15.794660188257694
        }
    }

    componentDidMount(){
        this.getProjectsFromApi();
    }

    static navigationOptions = {
        tabBarVisible: false
    }

    getProjectsFromApi = () => {
        const url = 'http://safkati.urbanlands.info/api_rest/project/read.php';
         fetch(url)
          .then(async (response) => {
              const data = await response.json();
              this.setState({ data })
            })
          .catch((error) => console.error(error))
    }
    
    _handleChange = (value, type) => {
        this.setState(prevState => {
            return {
                ...prevState,
                filter: {
                    ...prevState.filter,
                    [type]: value
                }
            }
        })
    }

    _toggleHeaderSearch = () => {
        this.props.navigation.navigate("Project")
    }

    _onRegionChangeComplete = region => {
        this.setState(prevState => {
            return {
                ...prevState,
                region: region
            }
        });
    }
    
    render() {
        if(!this.state.data.length > 0 ){
            return (
                <View style={[styles.container, styles.wrap, styles.loadCenter]}>
                    <ActivityIndicator size="large" />
                </View>
            )
        }
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <HeaderNative
                    toggleHeaderSearch={this._toggleHeaderSearch}
                />
                <View style={{ height: 60 }}>
                    <GradientText
                        text1={"Tous Nos Programmes".toUpperCase()}
                        text2={"Immobiliers".toUpperCase()}
                    />
                </View>
                <View style={[styles.wrap, styles.main]}>
                    {/* <FadIn> */}
                        <View style={styles.imgMainLevel1}>
                            {
                                this.state.data.slice(0, 2).map(item =>(
                                    <View style={{ width: "48%" }} key={item.id}>
                                        <CartMain
                                            uriImg={item.cover}
                                            type_de_bien={item.type_de_bien}
                                            libelle={item.libelle}
                                            ville={item.town}
                                            key={item.id}
                                        />
                                    </View>
                                ))
                            }
                        </View>
                    {/* </FadIn> */}
                    <View style={styles.imgMainLevel2}>
                        {
                            this.state.data.slice(0, 1).map(item =>(
                                <View key={item.id}>
                                    <ItemMainHome
                                        project={item}
                                    />
                                </View>
                            ))
                        }
                    </View>
                </View>
                <View style={[styles.wrap, styles.map]}>
                    <Map
                        data={this.state.data}
                        region={this.state.region}
                        detailMaps={this.props.detailMaps}
                    />
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        justifyContent: "flex-start"
    },
    title: {
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "center"
    },
    wrap: {
        flex:1,
    },
    loadCenter: {
        justifyContent: "center",
        alignItems: "center"
    },
    main: {
        flex: 2,
        margin: 5,
    },
    map: {
        flex: Dimensions.get("window").height >= 816 ? 1.5 : 1,
        margin: 5,
    },
    list: {
        flex: 1,
        marginTop: 0
    },
    imgMainLevel1: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    imgMainLevel2: {
        flexDirection: "column",
        justifyContent: "space-between",
    },
})
