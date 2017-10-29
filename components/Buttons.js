import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { red, white } from '../utils/colors'

export const PrimaryBtn = styled.TouchableOpacity`
  background-color: ${red};
  border-radius: 5px;
  height: 50px;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
`

export const PrimaryBtnText = styled.Text`
  font-size: 24px;
  color: ${white};
`
