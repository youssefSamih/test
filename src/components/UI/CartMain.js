import React from 'react'
import { StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Image, Text } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';

const CartMain = ({ uriImg, type_de_bien, libelle, ville }) => {
    return (
        <TouchableOpacity>
            <Image
                source={{ uri: uriImg }}
                containerStyle={styles.imgTop}
                PlaceholderContent={<ActivityIndicator />}
            />
            <LinearGradient
                colors={['#f6c552', '#ee813c', '#bf245a']}
                start={[4, 0.6]}
                style={styles.content_container}
            >
                <Text style={ type_de_bien !== null ? styles.typeText : ''}>{type_de_bien !== null ? type_de_bien : ''}</Text>
                <Text style={libelle !== null ? styles.title_text : ''}>{ libelle !== null ? libelle.toUpperCase() : ''}</Text>
                <Text style={ville !== null ? styles.townText : ''}>{ ville !== null ? ville.toUpperCase() : ''}</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    imgTop: { 
        height: 80, 
        width: "100%" 
    },
    content_container: {
        padding: 5,
        width: "100%",
        height: 70
    },
    typeText: {
        backgroundColor: "#f6c552",
        width: "100%",
        padding: 5,
        borderRadius: 50,
        color: '#bf245a',
        marginTop: -15,
        textAlign: "center"
    },
    title_text: {
        fontWeight: 'bold',
        fontSize: 20,
        flex: 1,
        flexWrap: 'wrap',
        color: "#f6c552",
        textAlign: "center"
    },
    townText: {
        fontWeight: '100',
        fontSize: 15,
        color: "#f6c552",
        textAlign: "center"
    },
})

export default CartMain