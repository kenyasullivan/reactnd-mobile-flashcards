import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { connect } from 'react-redux'
import styled from 'styled-components/native'
import { getDecks } from '../utils/api'
import { receiveDecks } from '../actions'
import Deck from './Deck'

const DeckListView = styled.View`
  flex: 1;
  justify-content: space-around;
  align-items: stretch;
`

class DeckList extends React.Component {
  componentDidMount () {
    getDecks().then(decks => this.props.dispatch(receiveDecks(decks)))
  }

  openDeck = ({ title }) => {
    this.props.navigation.navigate('DeckDetail', { title })
  }

  renderDeck = ({ item }) => {
    const deck = this.props.decks[item]
    return <Deck deck={deck} onPress={() => this.openDeck(deck)} />
  }

  render () {
    return (
      <DeckListView>
        <FlatList
          data={Object.keys(this.props.decks)}
          renderItem={this.renderDeck}
          keyExtractor={title => title}
        />
      </DeckListView>
    )
  }
}

function mapStateToProps (decks) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(DeckList)
