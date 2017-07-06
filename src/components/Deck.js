import React, { Component } from 'react'
import { PanResponder, Animated } from 'react-native'
import PropTypes from 'prop-types'

class Deck extends Component {

  constructor() {
    super()
    const position = new Animated.ValueXY()
    const panResponder = PanResponder.create({
      // Return true ~> this PanResponder is responsible for event.
      // Return false ~> this PanResponder is not responsible for event.
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (e, gesture) => {
        position.setValue({ x: gesture.dx, y: gesture.dy })
      },
      onPanResponderRelease: () => { }
    })
    this.state = { position, panResponder }
  }

  renderCards() {
    const { data, renderCard } = this.props
    return data.map(item => renderCard(item))
  }

  render() {
    return (
      // Spreading panHandlers callbacks into View
      <Animated.View
        style={this.state.position.getLayout()}
        {...this.state.panResponder.panHandlers}
      >
        {this.renderCards()}
      </Animated.View>
    )
  }
}

Deck.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    uri: PropTypes.string
  })).isRequired,
  renderCard: PropTypes.func.isRequired
}

export default Deck