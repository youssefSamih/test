import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, ActivityIndicator } from 'react-native'

import HeaderNative from '../components/UI/Header';
import ProjectItem from '../components/UI/ProjectItem';
import HeaderSearch from '../components/headerSearch/headerSearch';
import FadIn from '../components/Animations/FadIn';

export default class Project extends Component {
    state = {
        value : null,
        isLoading: false,
        data: [],
        toogleHeaderSearch: false,
        filter: {
            address: null,
            libelle: null,
            bien: null,
            type_de_bien: null,
            piece: null,
            prix_min: 0
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
        this.setState(prevState => {
            return {
                ...prevState,
                toogleHeaderSearch: !this.state.toogleHeaderSearch
            }
        })
    }

    _showSearchHeader = () =>{
        return (
            <FadIn>
                <View style={{ height: 260 }}>
                    <HeaderSearch
                        choice={this.state.data}
                        onValueChange={this._handleChange}
                        filter={this.state.filter}
                    />
                </View>
            </FadIn>
        )
    }
    
    render() {
        if(!this.state.data.length > 0 ){
            return (
                <View style={styles.container}>
                    <ActivityIndicator size="large" />
                </View>
            )
        }
        return (
            <View style={styles.container}>
                <HeaderNative
                    toggleHeaderSearch={this._toggleHeaderSearch}
                />
                { this.state.toogleHeaderSearch ? this._showSearchHeader() : <View/>}
                <FlatList
                    style={styles.list}
                    data={this.state.data}
                    // extraData={}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => (
                        <ProjectItem 
                            project={item}
                            // displayDetailForProject={}
                        />
                    )}
                    onEndReachedThreshold={0.5}
                    // onEndReached={() =>{
                    //     this.loadProject()
                    // }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        justifyContent: 'center' 
    },
    list: {
        flex: 1,
        marginTop: 0
    },
})
