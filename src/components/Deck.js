import React, { Component } from 'react'
import { View, PanResponder, Animated } from 'react-native'
import PropTypes from 'prop-types'

class Deck extends Component {

  constructor() {
    super()
    const position = new Animated.ValueXY()
    const panResponder = PanResponder.create({
      // Return true ~> this PanResponder is responsible for event.
      // Return false ~> this PanResponder is not responsible for event.
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (e, gesture) => position.setValue({ x: gesture.dx, y: gesture.dy }),
      onPanResponderRelease: () => { }
    })
    this.state = { position, panResponder }
  }

  renderCards() {
    const { data, renderCard } = this.props
    const { position, panResponder } = this.state
    return data.map((item, index) =>
      index === 0 ?
        <Animated.View
          style={position.getLayout()}
          {...panResponder.panHandlers}
        >
          {renderCard(item)}
        </Animated.View>
        : renderCard(item)
    )
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
    id: PropTypes.number,
    text: PropTypes.string,
    uri: PropTypes.string
  })).isRequired,
  renderCard: PropTypes.func.isRequired
}

export default Deck