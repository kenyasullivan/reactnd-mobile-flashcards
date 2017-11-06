import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import styled from 'styled-components/native'
import { red, white } from '../utils/colors'

const ButtonBase = styled.TouchableOpacity`
  border-radius: 5px;
  height: 50px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  margin: 10px;
`

export const Button = ButtonBase.extend`
  border: 1px solid black;
  background-color: ${white};
`

export const PrimaryButton = ButtonBase.extend`
  background-color: ${red};
`

export const ButtonText = styled.Text`
  font-size: 24px;
  color: black;
  text-align: center;
`

export const PrimaryButtonText = ButtonText.extend`
  color: ${white};
`

export const ButtonStyles = StyleSheet.create({
  icon: {
    marginLeft: -10,
    marginRight: 10
  }
})
