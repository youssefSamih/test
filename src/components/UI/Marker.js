import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import MapView from 'react-native-maps';
import { LinearGradient } from 'expo-linear-gradient';

class Marker extends React.Component {
    state = {
        displayDetail: false
    };

    _handlePressMap = () => {
        this.setState({ displayDetail: !this.state.displayDetail });
    }
    
    render(){
    const { regionMarker, uriMarker, libelle, town } = this.props;
        return (
            <View>
                <MapView.Marker
                    coordinate={regionMarker}
                    calloutAnchor={{x: 1.2, y: 0.5}}
                    anchor={{ x: 1, y: 1 }}
                    onPress={() => this._handlePressMap()}
                >
                    <Image
                        source={ this.state.displayDetail ?
                            require('../../constants/images/markerClicked.png') : require('../../constants/images/marker.png') }
                        style={styles.markerStyle}
                    />
                    <Image 
                        source={{ uri: uriMarker }}
                        style={styles.backImageStyle}
                    />
                    <MapView.Callout style={{ flex: 1, position: 'relative' }} tooltip >
                        <LinearGradient
                            colors={['#f6c552', '#ee813c', '#bf245a']}
                            start={[1.5, 0.6]}
                            style={{ flex: 1, padding: 5, borderRadius: 20 }}
                        >
                            <Text style={styles.title_text}>{libelle}</Text>
                            <Text style={styles.townText}>
                            {
                                town ? town.toUpperCase() : town
                            }
                            </Text>
                            <View style={{ alignItems: "center" }}>
                                <Text style={styles.typeText}>
                                    Voir l'offre
                                </Text>
                            </View>
                        </LinearGradient>
                    </MapView.Callout>
                </MapView.Marker>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    markerStyle: { 
        height: 80,
        width: 80 
    },
    backImageStyle: { 
        position: "absolute",
        height: 35, 
        width: 35,
        transform: [
            { translateX: 22 },
            { translateY: 12 },
        ],
        borderRadius: 100
    },
    viewContainer: {
        flex: 1,
        padding: 3,
        borderRadius: 30
    },
    typeText: {
        fontSize: 10,
        backgroundColor: "#f6c552",
        width: "70%",
        padding: 5,
        borderRadius: 50,
        color: '#bf245a',
        marginTop: 3,
        textAlign: "center"
    },
    townText: {
        fontWeight: '100',
        fontSize: 10,
        color: "#f6c552",
    },
    title_text: {
        fontWeight: 'bold',
        fontSize: 15,
        flex: 1,
        flexWrap: 'wrap',
        paddingRight: 5,
        color: "#f6c552",
    }
})

export default Marker;