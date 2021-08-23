import styled from 'styled-components/native';
import { Platform } from 'react-native';

import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
})`
  flex: 1;
  padding: ${getStatusBarHeight() + 40}px 20px ${getBottomSpace() + 20}px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View``;


export const SubTitle = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(34)}px;
`;


export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(34)}px;
  margin-top: -10px;
`;


export const Content = styled.View`
  flex: 1;
`;


export const Questions = styled.View`
  margin-top: 20px;
`;


export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(18)}px;

`;


export const Answer = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(18)}px;
`;
