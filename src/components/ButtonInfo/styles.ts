import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(RectButton)`
  position: absolute;
  bottom: ${getBottomSpace() + 20}px;
  justify-content: center;
  align-items: center;
  right: 20px;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.primary};
  z-index: 100;
`;

export const Icon = styled(Entypo)`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.white};
  `;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
  `;


export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(18)}px;
  text-align: center;
  margin: 30px 0px;
`;

