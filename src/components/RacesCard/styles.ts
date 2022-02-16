import styled from 'styled-components/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})`
  border-radius: 5px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 18px 0px;
  margin-bottom: 16px;
`;

export const RouteWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const IconWrapper = styled.View`
  height: 50px;
  width: 50px;
  border-radius: 10px;

  justify-content: center;
  align-items: center;

  background-color: ${({theme}) => theme.colors.background};
`;
export const Route = styled.View`
  justify-content: space-between;
`;

export const Track = styled.Text`
  margin-top: 2px;
  margin-left: 20px;
  font-size: ${RFValue(15)}px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.text};
`;

export const InfoWrapper = styled.View``;

export const Price = styled.Text`
  color: ${({theme}) => theme.colors.text};
  font-size: ${RFValue(13)}px;
  font-weight: 600;
  margin-top: 2px;
`;

export const Icon = styled(FontAwesome5)`
  font-size: ${RFValue(20)}px;
  color: ${({theme}) => theme.colors.secondaryColor};
`;
