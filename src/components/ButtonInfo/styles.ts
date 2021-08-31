import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  z-index: 100;
  margin-bottom: ${getBottomSpace()}px;
`;