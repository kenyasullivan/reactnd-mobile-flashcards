import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'
import { red, white } from '../utils/colors'
import Card from './Card'
import { Button, ButtonText } from './Buttons'

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
            <ButtonText>Correct</ButtonText>
          </Button>
          <Button onPress={() => this.props.onAnswer(false)}>
            <ButtonText>Incorrect</ButtonText>
          </Button>
        </QuizActions>
      </View>
    )
  }
}
