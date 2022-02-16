import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface Props {
  background?: string;
}

export const Container = styled.TouchableOpacity<Props>`
  width: 100%;
  background-color: ${({background}) => (background ? background : '#276EF1')};

  padding: 18px;
  border-radius: 5px;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;

  color: ${({theme}) => theme.colors.shape};
`;
