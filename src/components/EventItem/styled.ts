import styled from 'styled-components';

import devices from '@constants/devices';

export const Item = styled.div`
  width: ${({ theme }) => theme.width[250]}px;
  margin: ${({ theme }) => theme.margin[5]}px 0;
  display: flex;
  align-items: center;
  @media ${devices.laptop} {
    width: auto;
  }
  @media ${devices.tablet} {
    width: ${({ theme }) => theme.width[100]}%;
  }
`;

export const Time = styled.span`
  min-width: ${({ theme }) => theme.width[100]}px;
  max-width: ${({ theme }) => theme.width[100]}px;
  text-align: center;
  margin-right: ${({ theme }) => theme.margin[30]}px;
  padding: ${({ theme }) => theme.padding[3]}px ${({ theme }) => theme.padding[7]}px;
  background: ${({ theme }) => theme.colors.transparentDark};
  border-radius: ${({ theme }) => theme.borderRadius[15]}px;
  box-shadow: ${({ theme }) => theme.colors.boxShadowDark} 0px ${({ theme }) => theme.boxShadow[3]}px
    ${({ theme }) => theme.boxShadow[8]}px;
  @media ${devices.laptop} {
    min-width: ${({ theme }) => theme.width[150]}px;
  }
  @media ${devices.tablet} {
    font-size: ${({ theme }) => theme.fontSize[14]}px;
  }
  @media ${devices.largePhone} {
    min-width: ${({ theme }) => theme.width[100]}px;
  }
`;

export const Summary = styled.span`
  min-width: ${({ theme }) => theme.width[150]}px;
  max-height: ${({ theme }) => theme.height[42]}px;
  font-size: ${({ theme }) => theme.fontSize[14]}px;
  padding: ${({ theme }) => theme.padding[3]}px ${({ theme }) => theme.padding[7]}px;
  background: ${({ theme }) => theme.colors.transparentDark};
  border-radius: ${({ theme }) => theme.borderRadius[15]}px;
  box-shadow: ${({ theme }) => theme.colors.boxShadowDark} 0px ${({ theme }) => theme.boxShadow[3]}px
    ${({ theme }) => theme.boxShadow[8]}px;
  overflow: hidden;
  text-align: center;
  @media ${devices.laptop} {
    min-width: ${({ theme }) => theme.width[150]}px;
    height: ${({ theme }) => theme.height[28]}px;
  }
  @media ${devices.tablet} {
    font-size: ${({ theme }) => theme.fontSize[14]}px;
    height: ${({ theme }) => theme.height[24]}px;
    width: ${({ theme }) => theme.width[100]}%;
  }
`;
