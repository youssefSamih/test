import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import FadIn from '../Animations/FadIn';
import { LinearGradient } from 'expo-linear-gradient';

class ProjectItem extends React.Component {
  render() {
    const { project } = this.props
    return (
        <FadIn>
            <TouchableOpacity style={styles.main_container}>
                <Image
                    style={styles.image}
                    source={{uri: project.cover }}
                />
                <LinearGradient
                    colors={['#f6c552', '#ee813c', '#bf245a']}
                    start={[1.5, 0.6]}
                    style={styles.content_container}
                >
                  <View style={styles.details}>
                    <View style={styles.header_container}>
                        <Text style={styles.title_text}>{project.libelle.toUpperCase()}</Text>
                        <Text style={styles.vote_text}>
                        {
                          project.town !== null ? project.town.toUpperCase() : project.town
                        }
                        </Text>
                        <Text style={project.type_de_bien !== null ? styles.date_text : ''}>
                          {project.type_de_bien}
                        </Text>
                    </View>
                    <View style={styles.description_container}>
                        <Text style={styles.description_text} numberOfLines={5}>{project.description}</Text>
                    </View>
                    {/* <View style={styles.date_container}>
                        
                    </View> */}
                  </View>
                </LinearGradient>
          </TouchableOpacity>
        </FadIn>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    height: 210,
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
    padding: 5
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
    color: "#f6c552"
  },
  vote_text: {
      fontWeight: '100',
      fontSize: 15,
      color: "#f6c552"
  },
  description_container: {
      flex: 7,
      justifyContent: "center",
      alignItems: "center",
      paddingLeft: 5
  },
  description_text: {
      color: '#fff',
      marginTop: 10
  },
  date_container: {
      flex: 1
  },
  date_text: {
      fontSize: 14,
      backgroundColor: "#f6c552",
      width: "70%",
      paddingLeft: 5,
      borderRadius: 50,
      color: '#bf245a',
      marginTop: 10
  },
  favorite_image: {
    width: 25,
    height: 25,
    marginRight: 5
  }
})

export default ProjectItem