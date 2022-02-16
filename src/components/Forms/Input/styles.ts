import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface PropsLabel {
  labelColor?: string;
}
interface PropsInput {
  background?: string;
}

export const Wrapper = styled.View``;

export const Container = styled.TextInput<PropsInput>`
  width: 100%;
  padding: 16px 18px;

  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.colors.text_dark};

  background-color: ${({background}) => (background ? background : '#ffffff')};
  border-radius: 5px;

  margin-bottom: 8px;
`;

export const Label = styled.Text<PropsLabel>`
  color: ${({labelColor}) => (labelColor ? labelColor : '#000000')};
  font-size: ${RFValue(14)}px;
  margin-bottom: 10px;
`;
