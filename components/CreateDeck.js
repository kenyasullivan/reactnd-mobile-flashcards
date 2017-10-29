import React from 'react'
import { Alert, View, Text, TextInput, Platform } from 'react-native'
import { default as styled, css } from 'styled-components/native'
import { connect } from 'react-redux'
import { createDeck } from '../actions'
import { PrimaryBtn, PrimaryBtnText } from './Buttons'
import { gray } from '../utils/colors'

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
  padding: 10px;

  ${Platform.OS === 'ios' && css`
    border: 1px solid ${gray};
    border-radius: 5px;
  `}
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
    this.props.navigation.navigate('DeckDetail', { title })

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
        <PrimaryBtn onPress={this.submit}>
          <PrimaryBtnText>Create Deck</PrimaryBtnText>
        </PrimaryBtn>
      </FormView>
    )
  }
}

export default connect()(CreateDeck)
