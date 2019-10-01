import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import MapView from 'react-native-maps';
import Marker from '../UI/Marker';

export default class map extends Component {
    state = {
        mapLoaded: false,
        displayDetail: false
    };
    
    componentDidMount() {
        this.setState({ mapLoaded: true })
    }

    render() {
        if(!this.state.mapLoaded){
            return (
                <View 
                    style={{ 
                        flex: 1,
                        justifyContent: 'center' 
                    }} 
                >
                    <ActivityIndicator size="large" />
                </View>
            )
        }
        return (
            <MapView 
                style={{flex: 1}}
            >
                {
                    this.props.data.map(item => {
                        const { id, geo_latitude, geo_longitude, cover, libelle, town } = item
                        if(geo_latitude !== null || geo_longitude !== null){
                            return (
                                <View key={id}>
                                    <Marker
                                        regionMarker={{
                                            ...this.props.region,
                                            latitude: parseFloat(geo_latitude),
                                            longitude: parseFloat(geo_longitude)
                                        }}
                                        uriMarker={cover !== '' ? cover : ''}
                                        libelle={libelle}
                                        town={town}
                                    />
                                </View>
                            )
                        }
                    })
                }
            </MapView>
        )
    }
}

const styles = StyleSheet.create({})
