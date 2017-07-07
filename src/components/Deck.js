import React, { Component } from 'react'
import { View, PanResponder, Animated, Dimensions } from 'react-native'
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

  rotateCard() {
    const { position } = this.state
    // Dynamically setting input range to best match width of user device
    const SCREEN_WIDTH = Dimensions.get('window').width
    // Interpolating x amount of pixel drag (inputRange)
    // to degrees of rotation (outputRange)
    const rotate = position.x.interpolate({
      inputRange: [-SCREEN_WIDTH, 0, SCREEN_WIDTH],
      outputRange: ['-50deg', '0deg', '50deg']
    })
    return {
      ...position.getLayout(),
      // Animated.View will see the change in the rotate
      // interpolation objectand apply it to the rotate prop.
      transform: [{ rotate }]
    }
  }

  renderCards() {
    const { data, renderCard } = this.props
    return data.map((item, index) =>
      index === 0 ?
        <Animated.View
          key={item.id}
          style={this.rotateCard()}
          {...this.state.panResponder.panHandlers}
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