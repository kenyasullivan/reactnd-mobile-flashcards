import React from 'react'
import {
  View,
  Text,
  TouchableHighlight,
  Animated,
  StyleSheet
} from 'react-native'
import styled from 'styled-components/native'
import { red, white } from '../utils/colors'

const BackCard = styled.TouchableHighlight`
  justify-content: center;
  align-items: center;
  align-self: stretch;
  height: 400px;
  border: 2px solid black;
  border-radius: 8px;
  background-color: ${white};
  padding: 20px;
  margin: 10px;
`

const FrontCard = BackCard.extend`
  background-color: ${red};
`

const CardText = styled.Text`
  font-size: 48px;
  text-align: center;
`

export default class Card extends React.Component {
  state = {
    flipAnimated: new Animated.Value(0),
    flipPosition: 0
  }

  componentWillMount () {
    this.state.flipAnimated.addListener(({ value }) => {
      this.setState(() => ({ flipPosition: value }))
    })

    this.frontCardRotation = this.state.flipAnimated.interpolate({
      inputRange: [0, 180],
      outputRange: ['0deg', '180deg']
    })

    this.backCardRotation = this.state.flipAnimated.interpolate({
      inputRange: [0, 180],
      outputRange: ['180deg', '360deg']
    })
  }

  componentWillReceiveProps ({ card }) {
    const currCard = this.props.card
    if (card && currCard && currCard !== card) {
      this.state.flipAnimated.setValue(0)
    }
  }

  flipCard = () => {
    Animated.spring(this.state.flipAnimated, {
      toValue: this.state.flipPosition >= 90 ? 0 : 180,
      friction: 8,
      tension: 10
    }).start()
  }

  render () {
    const frontFaceStyle = { transform: [{ rotateY: this.frontCardRotation }] }
    const backFaceStyle = { transform: [{ rotateY: this.backCardRotation }] }
    return (
      <View style={styles.cardContainer}>
        <Animated.View style={[styles.cardWrapper, frontFaceStyle]}>
          <FrontCard onPress={this.flipCard}>
            <CardText style={{ color: white }}>
              {this.props.card.question}
            </CardText>
          </FrontCard>
        </Animated.View>
        <Animated.View
          style={[styles.cardWrapper, styles.backCardWrapper, backFaceStyle]}
        >
          <BackCard onPress={this.flipCard}>
            <CardText>{this.props.card.answer}</CardText>
          </BackCard>
        </Animated.View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    alignSelf: 'stretch'
  },
  cardWrapper: {
    backfaceVisibility: 'hidden'
  },
  backCardWrapper: {
    position: 'absolute',
    top: 0,
    width: '100%'
  }
})
