import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Card } from 'react-native-elements'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import styles from '../../styles/DeckListContainer_styles'
import * as actions from '../actions/'
import Deck from '../components/Deck'

class DeckListContainer extends Component {

  componentWillMount() {
    this.props.fetchPhotos()
  }

  renderCard(photo) {
    const {
      id,
      user: { name, location },
      urls: { small }
    } = photo
    const { author, description } = styles
    return (
      <Card image={{ uri: small }} key={id}>
        <Text style={author}>{name}</Text>
        <Text style={description}>{location}</Text>
      </Card>
    )
  }

  render() {
    const {
      data,
      onSwipe,
      currentCardIndex,
    } = this.props
    console.log('DeckListContainer props:', this.props)
    return (
      <View style={styles.container}>
        <Deck
          data={data}
          onSwipe={onSwipe}
          renderCard={this.renderCard}
          currentCardIndex={currentCardIndex}
        />
      </View>
    )
  }
}

const mapStateToProps = ({ photos }) => {
  const { data, currentCardIndex } = photos
  return { data, currentCardIndex }
}

DeckListContainer.propTypes = {
  fetchPhotos: PropTypes.func.isRequired,
  data: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]).isRequired,
  onSwipe: PropTypes.func.isRequired,
  currentCardIndex: PropTypes.number.isRequired
}

export default connect(mapStateToProps, actions)(DeckListContainer)