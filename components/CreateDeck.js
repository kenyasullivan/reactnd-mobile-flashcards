import React from 'react'
import { Alert, Text } from 'react-native'
import styled from 'styled-components/native'
import { connect } from 'react-redux'
import { createDeck } from '../actions'
import { PrimaryButton, PrimaryButtonText } from './Buttons'
import { FormView, TextField } from './Forms'

const Title = styled.Text`
  font-size: 48px;
  text-align: center;
  margin-bottom: 50px;
`

class CreateDeck extends React.Component {
  state = {
    title: ''
  }

  submit = () => {
    const { title } = this.state

    if (!title) {
      Alert.alert('Please enter a title.')
      return
    }

    if (this.props.decks[title]) {
      Alert.alert('A deck with that title already exists.')
      return
    }

    this.props.dispatch(createDeck(title))
    this.props.navigation.navigate('DeckDetail', { title })

    this.setState(() => ({ title: '' }))
  }

  render () {
    return (
      <FormView>
        <Title>What is the title of your new deck?</Title>
        <TextField
          placeholder='Deck Title'
          value={this.state.title}
          onChangeText={title => this.setState(() => ({ title }))}
        />
        <PrimaryButton onPress={this.submit} style={{ marginTop: 50 }}>
          <PrimaryButtonText>Create Deck</PrimaryButtonText>
        </PrimaryButton>
      </FormView>
    )
  }
}

function mapStateToProps (decks) {
  return { decks }
}

export default connect(mapStateToProps)(CreateDeck)
