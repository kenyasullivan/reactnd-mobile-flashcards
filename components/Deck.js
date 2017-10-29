import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { red, white } from '../utils/colors'

const DeckView = styled.View`
  justify-content: center;
  align-items: stretch;
  padding: 10px;
`

const DeckBtn = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: ${red};
  padding-top: 50px;
  padding-bottom: 50px;
  border: 2px solid black;
  border-radius: 5px;
  shadow-radius: 3px;
  shadow-opacity: 1;
  shadow-color: rgba(0,0,0,0.24);
  shadow-offset: 0 3px;
`

const DeckTitle = styled.Text`
  font-size: 36px;
  color: ${white};  
`

const CardCount = styled.Text`
  font-size: 24px;
  color: ${white};
  opacity: 0.8;
`

export default function Deck ({ deck, onPress }) {
  return (
    <DeckView>
      <DeckBtn onPress={onPress}>
        <DeckTitle>{deck.title}</DeckTitle>
        <CardCount>
          {deck.questions.length} card{deck.questions.length === 1 ? '' : 's'}
        </CardCount>
      </DeckBtn>
    </DeckView>
  )
}
