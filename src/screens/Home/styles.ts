import styled from 'styled-components/native';
import {FlatList, FlatListProps} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {getBottomSpace, getStatusBarHeight} from 'react-native-iphone-x-helper';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

import {DatalistProps} from '.';

export const Container = styled.View`
  flex: 1;

  width: 100%;
  margin-top: ${getStatusBarHeight() + RFValue(28)}px;
  padding: ${RFPercentage(3)}px;
`;

export const Welcome = styled.Text`
  font-size: ${RFValue(25)}px;
  color: ${({theme}) => theme.colors.text_dark};
`;

export const AmountContent = styled.View`
  background-color: ${({theme}) => theme.colors.secondary_light};

  margin-top: ${RFPercentage(2)}px;
  padding: 20px;
  border-radius: 10px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const AmountWrapper = styled.View``;

export const Label = styled.Text`
  color: ${({theme}) => theme.colors.primary};
  font-size: ${RFPercentage(2)}px;
`;

export const Amount = styled.Text`
  color: ${({theme}) => theme.colors.primary};
  font-weight: bold;
  font-size: ${RFPercentage(4)}px;
  margin-top: 10px;
`;

export const BackButton = styled(AntDesign)`
  font-size: ${RFPercentage(3)}px;
  color: ${({theme}) => theme.colors.primary};
`;

export const Races = styled.View``;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.text_dark};

  font-size: ${RFValue(17)}px;
  margin-top: ${RFPercentage(3)}px;
`;

export const RacesList = styled(
  FlatList as new (
    props: FlatListProps<DatalistProps>,
  ) => FlatList<DatalistProps>,
).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {paddingBottom: getBottomSpace()},
})``;

export const Separator = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${({theme}) => theme.colors.secondary_light};
`;
