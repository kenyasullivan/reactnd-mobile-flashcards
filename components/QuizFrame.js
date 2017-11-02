import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'
import { Entypo } from '@expo/vector-icons'
import { red, white, green } from '../utils/colors'
import Card from './Card'
import { Button, ButtonText, ButtonStyles } from './Buttons'

const QuizActions = styled.View`
  flex-direction: row;
  justify-content: space-around;
  padding: 10px;
  margin-top: 20px;
`

export default class QuizFrame extends React.Component {
  render () {
    return (
      <View>
        <Card card={this.props.card} />
        <QuizActions>
          <Button onPress={() => this.props.onAnswer(true)}>
            <Entypo
              name='check'
              size={30}
              style={[ButtonStyles.icon, { color: 'green' }]}
            />
            <ButtonText>Correct</ButtonText>
          </Button>
          <Button onPress={() => this.props.onAnswer(false)}>
            <Entypo
              name='cross'
              size={30}
              style={[ButtonStyles.icon, { color: red }]}
            />
            <ButtonText>Incorrect</ButtonText>
          </Button>
        </QuizActions>
      </View>
    )
  }
}
