import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default class DeckList extends React.Component {
  render () {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Deck List</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('DeckDetail')}
        >
          <Text>Go to Deck Detail</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
