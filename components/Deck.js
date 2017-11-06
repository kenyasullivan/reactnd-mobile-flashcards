import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { FontAwesome } from '@expo/vector-icons'
import { red, white } from '../utils/colors'
import CardCount from './CardCount'

const DeckView = styled.View`
  justify-content: center;
  align-items: stretch;
  padding: 10px;
`

const DeckBtn = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: ${red};
  padding: 20px;
  border: 2px solid black;
  border-radius: 5px;
  shadow-radius: 3px;
  shadow-opacity: 1;
  shadow-color: rgba(0,0,0,0.24);
  shadow-offset: 0 3px;
  flex-grow: 0;
`

const FlashIcon = styled(FontAwesome).attrs({
  name: 'flash',
  size: 72
})`
  color: yellow;
  padding: 10px 25px;
  margin-right: 20px;
`

const DeckDetails = styled.View`
  flex: -1;
`

const DeckTitle = styled.Text`
  font-size: 36px;
  color: ${white};
`

const StyledCardCount = styled(CardCount)`
  font-size: 24px;
  color: ${white};
  opacity: 0.8;
`

export default function Deck ({ deck, onPress }) {
  return (
    <DeckView>
      <DeckBtn onPress={onPress}>
        <FlashIcon />
        <DeckDetails>
          <DeckTitle>{deck.title}</DeckTitle>
          <StyledCardCount deck={deck} />
        </DeckDetails>
      </DeckBtn>
    </DeckView>
  )
}
