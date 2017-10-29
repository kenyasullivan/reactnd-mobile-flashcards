import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default class DeckDetail extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.title
    }
  }

  render () {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{this.props.navigation.state.params.title}</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('CreateCard')}
        >
          <Text>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Quiz')}
        >
          <Text>Start Quiz</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
