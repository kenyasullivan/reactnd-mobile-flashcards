import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components/native'
import Card from './Card'
import { gray } from '../utils/colors'

const ProgressText = styled.Text`
  margin: 10px;
  font-size: 24px;
  font-weight: bold;
  color: ${gray};
  align-self: flex-end;
`

export default class Quiz extends React.Component {
  state = {
    index: 0
  }

  render () {
    const { deck } = this.props.navigation.state.params
    return (
      <View style={{ flex: 1, alignItems: 'stretch' }}>
        <Card card={deck.cards[this.state.index]} />
        <ProgressText>
          {this.state.index + 1} / {deck.cards.length}
        </ProgressText>
      </View>
    )
  }
}
