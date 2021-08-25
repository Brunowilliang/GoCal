import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled(RectButton)`
  margin-bottom: ${getBottomSpace()}px;
`;