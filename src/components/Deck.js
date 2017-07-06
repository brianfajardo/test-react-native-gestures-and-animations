import React, { Component } from 'react'
import { View, Animated } from 'react-native'
import PropTypes from 'prop-types'

class Deck extends Component {

  renderCards() {
    const { data, renderCard } = this.props
    return data.map(item => renderCard(item))
  }

  render() {
    return (
      <View>
        {this.renderCards()}
      </View>
    )
  }
}

Deck.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    text: PropTypes.string,
    uri: PropTypes.string
  })).isRequired,
  renderCard: PropTypes.func.isRequired
}

export default Deck