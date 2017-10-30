import React from 'react'
import { Alert, View } from 'react-native'
import styled from 'styled-components/native'
import { connect } from 'react-redux'
import { addCardToDeck } from '../actions'
import { PrimaryButton, PrimaryButtonText } from './Buttons'
import { FormView, TextField } from './Forms'

class CreateCard extends React.Component {
  state = {
    question: '',
    answer: ''
  }

  submit = () => {
    const { question, answer } = this.state
    const { title } = this.props.navigation.state.params

    if (!question) {
      Alert.alert('Please enter a question.')
      return
    }

    if (!answer) {
      Alert.alert('Please enter an answer.')
      return
    }

    this.props.dispatch(addCardToDeck(title, { question, answer }))
    this.props.navigation.goBack()

    this.setState(() => ({ question: '', answer: '' }))
  }

  render () {
    return (
      <FormView>
        <TextField
          placeholder='Question'
          value={this.state.question}
          onChangeText={question => this.setState(() => ({ question }))}
        />
        <TextField
          placeholder='Answer'
          value={this.state.answer}
          onChangeText={answer => this.setState(() => ({ answer }))}
        />
        <PrimaryButton onPress={this.submit} style={{ marginTop: 20 }}>
          <PrimaryButtonText>Save Card</PrimaryButtonText>
        </PrimaryButton>
      </FormView>
    )
  }
}

export default connect()(CreateCard)
