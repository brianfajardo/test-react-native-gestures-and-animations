import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Card } from 'react-native-elements'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { fetchPhotos } from '../actions/'
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
    return (
      <View style={styles.container}>
        <Deck
          data={this.props.photos}
          renderCard={this.renderCard}
        />
      </View>
    )
  }
}

const mapStateToProps = ({ photos }) => ({ photos })

DeckListContainer.propTypes = {
  fetchPhotos: PropTypes.func.isRequired,
  photos: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]).isRequired
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  author: {
    marginBottom: 10,
    fontSize: 18,
    color: '#777777',
  },
  descrition: {
    marginBottom: 10
  }
})

export default connect(mapStateToProps, { fetchPhotos })(DeckListContainer)