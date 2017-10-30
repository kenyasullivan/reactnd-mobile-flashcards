import React from 'react'
import { View, Text, TextInput, Platform } from 'react-native'
import { default as styled, css } from 'styled-components/native'
import { gray } from '../utils/colors'

export const FormView = styled.View`
  flex: 1;
  align-items: center;
  padding: 20px;
`

export const TextField = styled.TextInput`
  font-size: 24px;
  width: 100%;
  padding: 10px;
  margin: 20px;

  ${Platform.OS === 'ios' && css`
    border: 1px solid ${gray};
    border-radius: 5px;
  `}
`
