import styled from 'styled-components';

import chooseBgImage from '@utils/chooseImage';
import devices from '@constants/devices';
import { IMainWrapper } from '@src/types';

const Wrapper = styled.div<IMainWrapper>`
  position: relative;
  width: ${({ theme }) => theme.width[80]}%;
  height: ${({ theme }) => theme.height[80]}%;
  background: url(${({ weatherSummary }) => chooseBgImage(weatherSummary).mainImage}) no-repeat fixed center;
  background-size: cover;
  box-shadow: ${({ theme }) => theme.colors.boxShadowDark} 0px ${({ theme }) => theme.boxShadow[3]}px
    ${({ theme }) => theme.boxShadow[8]}px;
  border-radius: ${({ theme }) => theme.borderRadius[5]}px;
  @media ${devices.tablet} {
    width: ${({ theme }) => theme.width[100]}%;
    height: ${({ theme }) => theme.height[100]}%;
    background: none;
    box-shadow: none;
    border-radius: 0;
  }
`;
export default Wrapper;
