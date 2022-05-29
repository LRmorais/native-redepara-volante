import styled from 'styled-components/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {RFValue, RFPercentage} from 'react-native-responsive-fontsize';

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(8)}px;
  justify-content: flex-end;
  flex-direction: column;
  background-color: ${({theme}) => theme.colors.primaryColor};
`;
export const HeaderContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 15px;
`;
export const BackButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const ChatAction = styled.TouchableOpacity`
`;

export const HeaderText = styled.Text`
  margin-left: 15px;
  color: ${({theme}) => theme.colors.shape};
  font-size: ${RFValue(20)}px;
`;

export const BackIcon = styled(AntDesign)`
  font-size: ${RFValue(30)}px;
  color: ${({theme}) => theme.colors.shape};
`;
export const ButtonContainer = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.colors.primaryColor};
  width: 100%;
  padding: 15px;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  align-items: center;
  justify-content: center;
`;

export const InfoBox = styled.View`
  position: absolute;
  right: 0;
  left: 0;
  bottom: 10%;
  padding: 20px;
`;

export const InfoWrapper = styled.View`
  padding: 10px;
  /* background-color: 'rgba(109, 95, 253,0.8)'; */
  background-color: 'rgba(255, 255, 255, 0.9)';
  border-radius: 10px;
`;
export const RowWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 3px;
`;
export const MarkerIcon = styled(FontAwesome5)`
  padding: 15px;
  font-size: ${RFValue(20)}px;
  /* color: ${({theme}) => theme.colors.shape}; */
`;

export const InfoText = styled.Text`
  color: ${({theme}) => theme.colors.text_dark};
  font-size: ${RFValue(14)}px;
  margin: 10px;
`;

export const Separator = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${({theme}) => theme.colors.secondary_light};
`;

export const ButtonTitle = styled.Text`
  font-size: ${RFValue(15)}px;
  color: ${({theme}) => theme.colors.secondaryColor};
`;

export const PlayerContainer = styled.View`
  background-color: ${({theme}) => theme.colors.primary};
  width: 100%;
  padding: ${RFValue(15)}px;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  align-items: center;
`;
