import React from 'react'
import { Alert, View, Text, TextInput, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { connect } from 'react-redux'
import { createDeck } from '../actions'
import { red, white } from '../utils/colors'

const FormView = styled.View`
  flex: 1;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
`

const Title = styled.Text`
  font-size: 48px;
  text-align: center;
`

const TitleInput = styled.TextInput`
  font-size: 24px;
  width: 100%;
  border-width: 1px;
  border-color: black;
  border-radius: 5px;
  padding: 10px;
`

const SubmitBtn = styled.TouchableOpacity`
  background-color: ${red};
  border-radius: 5px;
  height: 50px;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
`

const BtnText = styled.Text`
  font-size: 24px;
  color: ${white};
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

    // @todo handle title already exists

    this.props.dispatch(createDeck(title))
    this.props.navigation.navigate('DeckList') // @todo navigate to deck detail for deck

    this.setState(() => ({ title: '' }))
  }

  render () {
    return (
      <FormView>
        <Title>What is the title of your new deck?</Title>
        <TitleInput
          placeholder='Deck Title'
          value={this.state.title}
          onChangeText={title => this.setState(() => ({ title }))}
        />
        <SubmitBtn onPress={this.submit}>
          <BtnText>Create Deck</BtnText>
        </SubmitBtn>
      </FormView>
    )
  }
}

export default connect()(CreateDeck)
