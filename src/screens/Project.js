import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, ActivityIndicator } from 'react-native'
import { Slider } from 'react-native-elements';
import HeaderNative from '../components/UI/Header';
import ProjectItem from '../components/UI/ProjectItem';

export default class Project extends Component {
    state = {
        value : null,
        isLoading: false,
        data: []
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

    componentDidMount(){
        this.getProjectsFromApi();
    }

    // loadProject(){
    //     this.setState({ isLoading: true })
    //     getProjectFromApi(this.page+1).then(data => {
    //         this.page = data.page
    //         this.totalPages = data.total_pages
    //         this.setState({
    //             films: [ ...this.state.films, ...data.results ],
    //             isLoading: false
    //         })
    //     })
    // }
    
    render() {
        if(!this.state.data.length > 0 ){
            return (
                <View style={styles.container}>
                    <ActivityIndicator size="large" />
                </View>
            )
        }
        return (
            // <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>
            //     <Slider
            //         value={this.state.value}
            //         onValueChange={value => this.setState({ value })}
            //     />
            //     <Text>Value: {this.state.value}</Text>
            // </View>
            <View style={styles.container}>
                <HeaderNative />
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
        marginTop: 24, 
        justifyContent: 'center' 
    },
    list: {
        flex: 1,
        marginTop: 0
    },
})
