import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface PropsLabel {
  labelColor?: string;
}

export const Label = styled.Text<PropsLabel>`
  color: ${({labelColor}) => (labelColor ? labelColor : '#000000')};
  font-size: ${RFValue(18)}px;
  font-weight: 700;
  margin-bottom: 20px;
`;
