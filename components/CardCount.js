import React from 'react'
import { Text } from 'react-native'

export default function CardCount ({ style, deck }) {
  return (
    <Text style={style}>
      {deck.cards.length} card{deck.cards.length === 1 ? '' : 's'}
    </Text>
  )
}
