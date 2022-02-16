import styled from 'styled-components/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {RFValue, RFPercentage} from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  width: 100%;
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(8)}px;
  justify-content: flex-end;
  flex-direction: column;
  background-color: ${({theme}) => theme.colors.primaryColor};
`;

export const BackButton = styled.TouchableOpacity`
  flex-direction: row;
  width: 20%;
`;
export const HeaderText = styled.Text`
  padding: 15px;

  color: ${({theme}) => theme.colors.shape};
  font-size: ${RFValue(15)}px;
  font-weight: bold;
`;

export const BackIcon = styled(AntDesign)`
  padding: 15px;
  font-size: ${RFValue(20)}px;
  color: ${({theme}) => theme.colors.shape};
`;

export const InfoContainer = styled.View`
  flex-direction: column;
  padding: 16px;
  justify-content: center;
`;

export const InfoBox = styled.View`
margin-bottom: 20px;
`;
export const WrapperInfos = styled.View`
  flex-direction: row;
  margin-bottom: 20px;
`;

export const Texts = styled.Text`
  color: ${({theme}) => theme.colors.text_dark};
  font-size: ${RFValue(20)}px;
  margin-bottom: 10px;
  margin-left: 15px;
`;

export const ContainerButton = styled.View`
  margin-top: 25px;
`;
export const PlayerContainer = styled.View`
border-radius: 5px;
padding: 20px;
background: ${({theme}) => theme.colors.primary_light};
`;
