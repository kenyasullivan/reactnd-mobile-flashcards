import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components/native'
import QuizFrame from './QuizFrame'
import { Button, ButtonText } from './Buttons'
import { gray } from '../utils/colors'
import {
  clearLocalNotification,
  setLocalNotification
} from '../utils/notifications'

const ProgressText = styled.Text`
  margin: 10px;
  font-size: 24px;
  font-weight: bold;
  color: ${gray};
  align-self: flex-end;
`

const QuizResultsView = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding: 50px 10px;
`

const QuizRemark = styled.Text`
  font-size: 36px;
  text-align: center;
`

const QuizScore = styled.Text`
  font-size: 72px;
  text-align: center;
  margin-bottom: 50px;
`

const QuizResultsButtons = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export default class Quiz extends React.Component {
  state = {
    index: 0,
    results: []
  }

  componentDidMount () {
    clearLocalNotification().then(setLocalNotification)
  }

  answerCard = result => {
    this.setState(state => ({
      index: state.index + 1,
      results: [...state.results, result]
    }))
  }

  getQuizRemark = score => {
    if (score === 100) {
      return 'Nailed it!'
    }
    if (score >= 90) {
      return 'So close!'
    }
    if (score >= 75) {
      return 'You’ve got this, keep at it!'
    }
    if (score >= 50) {
      return 'Practice makes perfect!'
    }
    return 'Your learning journey is just beginning, enjoy the ride!'
  }

  reset = () => {
    this.setState(() => ({ index: 0, results: [] }))
  }

  render () {
    const { deck } = this.props.navigation.state.params
    const { index, results } = this.state
    const total = deck.cards.length

    if (index === total) {
      const correct = results.reduce(
        (count, result) => (result ? count + 1 : count),
        0
      )
      const score = correct / total * 100

      return (
        <QuizResultsView>
          <View>
            <QuizScore>{score}%</QuizScore>
            <QuizRemark>{this.getQuizRemark(score)}</QuizRemark>
          </View>
          <QuizResultsButtons>
            <Button onPress={this.reset}>
              <ButtonText>Try Again</ButtonText>
            </Button>
            <Button onPress={() => this.props.navigation.goBack()}>
              <ButtonText>Back to Deck</ButtonText>
            </Button>
          </QuizResultsButtons>
        </QuizResultsView>
      )
    }

    // @todo animate transition from one quiz frame to next
    return (
      <View style={{ flex: 1, alignItems: 'stretch' }}>
        <ProgressText>{index + 1} / {total}</ProgressText>
        <QuizFrame card={deck.cards[index]} onAnswer={this.answerCard} />
      </View>
    )
  }
}
