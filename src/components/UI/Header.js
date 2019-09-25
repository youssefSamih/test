import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';


export default class Header extends Component {
    render() {
        return (
            <Container>
                <Header>
                <Left>
                    <Button transparent>
                        <Icon name='menu' />
                    </Button>
                </Left>
                <Body style={{ alignItems: "flex-end" }}>
                    <Title>Header</Title>
                </Body>
                <Right>
                    <Button transparent>
                        <Icon name='ios-search' />
                    </Button>
                </Right>
                </Header>
            </Container>
        )
    }
}

const styles = StyleSheet.create({})
