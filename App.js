import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Card, Button } from 'react-native-elements'
import DUMMY_DATA from './src/constants/data'

import Deck from './src/components/Deck'

class App extends Component {

  renderCard(item) {
    const { id, text, uri } = item
    const { title, description } = styles
    return (
      <Card image={{ uri }} key={id}>
        <Text style={title}>{text}</Text>
        <Text style={description}>
          Melon flavoured popsicle, mmm... (test)
          </Text>
        <Button
          icon={{ name: 'favorite' }}
          backgroundColor="#00bfff"
        />
      </Card>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Deck
          data={DUMMY_DATA}
          renderCard={this.renderCard}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    marginBottom: 10,
    fontSize: 18,
    color: '#777777',
  },
  description: {
    marginBottom: 10
  }
})

export default App