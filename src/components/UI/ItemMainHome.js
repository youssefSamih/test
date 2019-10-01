import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native'
import FadIn from '../Animations/FadIn';
import { LinearGradient } from 'expo-linear-gradient';

const ItemMainHome = ({ project }) => {
    return (
      // <FadIn>
          <TouchableOpacity style={styles.main_container}>
              <Image
                  style={styles.image}
                  source={{uri: project.cover }}
              />
              <ImageBackground source={require('../../constants/images/listProject.png')} style={styles.backgroundImage}>
                <LinearGradient
                    colors={['#bf245a', '#ee813c', '#f6c552']}
                    start={[4, 0.6]}
                    style={styles.content_container}
                >
                  <View style={styles.details}>
                    <View style={styles.header_container}>
                        <Text style={styles.title_text}>{project.libelle.toUpperCase()}</Text>
                        <Text style={styles.townText}>
                        {
                          project.town !== null ? project.town.toUpperCase() : project.town
                        }
                        </Text>
                        <Text style={project.type_de_bien !== null ? styles.typeText : ''}>
                          {project.type_de_bien}
                        </Text>
                    </View>
                    <View style={styles.description_container}>
                        <Text style={styles.description_text} numberOfLines={4}>{project.description}</Text>
                    </View>
                  </View>
                </LinearGradient>
              </ImageBackground>
        </TouchableOpacity>
      // </FadIn>
    )
}

const styles = StyleSheet.create({
  main_container: {
    height: 200,
    flexDirection: 'row',
    marginTop: 5
  },
  image: {
    width: "40%",
    height: "100%",
    backgroundColor: 'gray'
  },
  content_container: {
    flex: 1,
    padding: 5,
    opacity: .7
  },
  details: {
    flex: 1,
    marginLeft: 10
  },
  header_container: {
    flex: 5,
    flexDirection: 'column',
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 5,
    color: "#bf245a"
  },
  townText: {
      fontWeight: '100',
      fontSize: 15,
      color: "#bf245a"
  },
  description_container: {
      flex: 7,
      justifyContent: "center",
      alignItems: "center",
      paddingLeft: 5
  },
  description_text: {
      color: 'gray',
      marginTop: 10
  },
  date_container: {
      flex: 1
  },
  typeText: {
      fontSize: 14,
      backgroundColor: "#bf245a",
      width: "70%",
      paddingLeft: 5,
      borderRadius: 50,
      color: '#f6c552',
      marginTop: 10
  },
  favorite_image: {
    width: 25,
    height: 25,
    marginRight: 5
  },
  backgroundImage: {
    width: "100%",
    flex: 1,
  },
})

export default ItemMainHome