import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.primaryColor};
  padding: 20px;
`;

export const BackButtonContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-bottom: 20;
`

export const Label = styled.Text`
  font-size: ${RFValue(18)};
  color: ${({ theme }) => theme.colors.text};
  font-weight: 700;

  margin-left: 20;
`