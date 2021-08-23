import styled from 'styled-components/native';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';

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

export const Card = styled(RectButton)`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  flex-direction: row;
  padding: 25px 30px;
  align-items: center;
  margin-bottom: 10px;
`;



export const CardWrapper = styled.View`
  margin-left: 20px
`;


export const CardTitle = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.primary};
`;


export const Description = styled.Text`
  font-size: ${RFValue(13)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.black};
`;

