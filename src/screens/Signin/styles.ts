import styled from "styled-components/native";
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  padding: ${RFPercentage(3)}px;
  background-color: ${({ theme }) => theme.colors.primaryColor};
`

export const Title = styled.Text`
  font-size: ${RFValue(25)}px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 700;
`

export const Logo = styled.Image`
  width: 100%;
  height: 8%;
  margin-bottom: 20px;
`;
