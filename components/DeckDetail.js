import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { connect } from 'react-redux'
import { white, gray } from '../utils/colors'
import CardCount from './CardCount'
import { Button, ButtonText, PrimaryButton, PrimaryButtonText } from './Buttons'

const CenteredView = styled.View`
  align-items: center;
`

const DeckDetailView = CenteredView.extend`
  flex: 1;
  justify-content: space-between;
  padding: 50px 10px;
`

const DeckTitle = styled.Text`
  font-size: 48px;
  color: black;
`

const StyledCardCount = styled(CardCount)`
  font-size: 32px;
  color: ${gray};
`

class DeckDetail extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.title
    }
  }

  render () {
    const { deck } = this.props
    const { title } = deck

    return (
      <DeckDetailView>
        <CenteredView>
          <DeckTitle>{title}</DeckTitle>
          <StyledCardCount deck={deck} />
        </CenteredView>
        <CenteredView>
          <Button
            onPress={() =>
              this.props.navigation.navigate('CreateCard', { title })}
            style={{ marginBottom: 10 }}
          >
            <ButtonText>Add Card</ButtonText>
          </Button>
          <PrimaryButton
            onPress={() => this.props.navigation.navigate('Quiz', { deck })}
          >
            <PrimaryButtonText>Start Quiz</PrimaryButtonText>
          </PrimaryButton>
        </CenteredView>
      </DeckDetailView>
    )
  }
}

function mapStateToProps (decks, { navigation }) {
  const title = navigation.state.params.title
  return {
    deck: decks[title]
  }
}

export default connect(mapStateToProps)(DeckDetail)
