import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { getDecks } from '../utils/api'
import { receiveDecks } from '../actions'

class DeckList extends React.Component {
  componentDidMount () {
    getDecks().then(decks => this.props.dispatch(receiveDecks(decks)))
  }

  render () {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'space-around',
          alignItems: 'center'
        }}
      >
        <Text>Deck List</Text>
        {Object.keys(this.props.decks).map(title => (
          <Text key={title} style={{ fontWeight: 'bold' }}>{title}</Text>
        ))}
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('DeckDetail')}
        >
          <Text>Go to Deck Detail</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

function mapStateToProps (decks) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(DeckList)
