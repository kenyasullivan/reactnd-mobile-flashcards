import React from 'react'
import { Text } from 'react-native'

export default function CardCount ({ style, deck }) {
  return (
    <Text style={style}>
      {deck.questions.length} card{deck.questions.length === 1 ? '' : 's'}
    </Text>
  )
}
