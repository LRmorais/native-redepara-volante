import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { TextInputProps } from 'react-native'

interface PropsLabel {
  labelColor?: string;
}
interface PropsInput extends TextInputProps{
  background?: string;
}

export const Wrapper = styled.View``;

export const Container = styled.TextInput<PropsInput>`
  width: 100%;
  padding: 16px 18px;

  font-size: ${RFValue(18)}px;
  color: ${({theme}) => theme.colors.text};

  background-color: ${({background}) => (background ? background : '#ffffff')};
  border-radius: 5px;

  margin-bottom: 8px;
  
`;

export const Label = styled.Text<PropsLabel>`
  color: ${({labelColor}) => (labelColor ? labelColor : '#000000')};
  font-weight: 700;
  font-size: ${RFValue(18)}px;
  margin-bottom: 10px;
`;
