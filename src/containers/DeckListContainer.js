import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Card, Button } from 'react-native-elements'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import styles from '../../styles/DeckListContainer_styles'
import * as actions from '../actions/'
import Deck from '../components/Deck'

class DeckListContainer extends Component {

  componentWillMount() {
    this.props.fetchPhotos('init')
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

  renderEndOfCards() {
    return (
      <Card title="Wow! You've hit the end.">
        <Text style={styles.description}>
          There are no more photos to view in this deck.
          </Text>
        <Button
          title="Load more.."
          onPress={() => this.props.fetchPhotos('more')}
        />
      </Card>
    )
  }

  render() {
    const {
      data,
      onSwipeLeft,
      onSwipeRight,
      currentCardIndex,
    } = this.props
    return (
      <View style={styles.container}>
        <Deck
          data={data}
          onSwipeLeft={onSwipeLeft}
          onSwipeRight={onSwipeRight}
          renderCard={this.renderCard}
          currentCardIndex={currentCardIndex}
          renderEndOfCards={this.renderEndOfCards}
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
  onSwipeLeft: PropTypes.func.isRequired,
  onSwipeRight: PropTypes.func.isRequired,
  currentCardIndex: PropTypes.number.isRequired
}

export default connect(mapStateToProps, actions)(DeckListContainer)