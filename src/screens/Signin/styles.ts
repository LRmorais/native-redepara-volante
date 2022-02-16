import styled from "styled-components/native";
import {Platform} from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  margin-top: ${Platform.OS === 'ios' ? getStatusBarHeight() + RFValue(28) : 0 }px;
  padding: ${RFPercentage(3)}px;
  background-color: ${({ theme }) => theme.colors.primaryColor};
`

export const Title = styled.Text`
  font-size: ${RFValue(25)}px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.primary};
`
