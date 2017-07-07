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
      onPanResponderRelease: () => this.resetCardPosition()
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

  resetCardPosition() {
    Animated.spring(this.state.position, {
      toValue: { x: 0, y: 0 }
    }).start()
  }

  renderCards() {
    const { data, renderCard } = this.props
    console.log('data:', data)
    return data.map((photo, index) =>
      index === 0 ?
        <Animated.View
          key={photo.id}
          style={this.rotateCard()}
          {...this.state.panResponder.panHandlers}
        >
          {renderCard(photo)}
        </Animated.View>
        : renderCard(photo)
    )
  }

  render() {
    return (
      <View>
        {this.props.data.length > 0 && this.renderCards()}
      </View>
    )
  }
}

Deck.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  renderCard: PropTypes.func.isRequired
}

export default Deck