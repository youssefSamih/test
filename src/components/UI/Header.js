import React from 'react'
import { StyleSheet } from 'react-native'
import { Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';


const HeaderNative = ({ toggleHeaderSearch }) => {
    return (
        <LinearGradient
            colors={['#f6c552', '#ee813c', '#bf245a']}
            start={[1.5, 0.6]}
        >
            <Header
                style={{
                    backgroundColor: "transparent"
                }}
            >
                    <Left style={{ flex: 1 }}>
                        <Button transparent>
                            <Icon name='menu' style={styles.iosColor} />
                        </Button>
                    </Left>
                    <Body style={{ flex: 0, alignItems: "flex-end" }}>
                        <Title style={styles.iosColor}>Projets</Title>
                    </Body>
                    <Right style={{ flex: 1 }}>
                        <Button onPress={() => toggleHeaderSearch()} transparent>
                            <Icon name='ios-search' style={styles.iosColor} />
                        </Button>
                    </Right>
            </Header>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    iosColor: { color: "#fff" }
})

export default HeaderNative