import styled from 'styled-components/native';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import { Platform } from 'react-native';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: 'flex-start',
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
`;


export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(18)}px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const ButtonsContainer = styled.View`
  margin-top: 10px;
  margin-bottom: 40px;
`;