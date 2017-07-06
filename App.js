import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import DUMMY_DATA from './src/constants/data'

import Deck from './src/components/Deck'

class App extends Component {

  renderCard(item) {
    return <Text>{item.text}</Text>
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
})

export default App