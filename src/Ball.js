import React, { Component } from 'react'
import { View, StyleSheet, Animated } from 'react-native'

class Ball extends Component {

  componentWillMount() {
    this.position = new Animated.ValueXY(0, 0)
    Animated.spring(this.position, {
      toValue: { x: 157.5, y: 300 }
    }).start()
  }

  render() {
    return (
      <Animated.View style={this.position.getLayout()}>
        <View style={styles.ball} />
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  ball: {
    height: 60,
    width: 60,
    borderRadius: 30,
    borderWidth: 30,
    borderColor: 'orange'
  }
})

export default Ball