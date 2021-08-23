import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { getBottomSpace } from 'react-native-iphone-x-helper';


export const Container = styled.View`
  flex: 1;
  padding: 30px 20px ${getBottomSpace() + 20}px;
`;


export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
`;

