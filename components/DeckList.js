import React from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import styled from 'styled-components/native'
import { getDecks } from '../utils/api'
import { receiveDecks } from '../actions'
import Deck from './Deck'
import { PrimaryBtn, PrimaryBtnText } from './Buttons'

const DeckListView = styled.View`
  flex: 1;
  justify-content: space-around;
  align-items: stretch;
`

const EmptyListView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 10px;
`

const EmptyListText = styled.Text`
  font-size: 30px;
  text-align: center;
  padding-bottom: 20px;
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
    const deckTitles = Object.keys(this.props.decks)

    if (!deckTitles.length) {
      return (
        <EmptyListView>
          <EmptyListText>You have no flash card decks.</EmptyListText>
          <PrimaryBtn
            onPress={() => this.props.navigation.navigate('CreateDeck')}
          >
            <PrimaryBtnText>Create your first deck</PrimaryBtnText>
          </PrimaryBtn>
        </EmptyListView>
      )
    }

    return (
      <DeckListView>
        <FlatList
          data={deckTitles}
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
