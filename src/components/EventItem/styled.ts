import styled from 'styled-components';

import devices from '@constants/devices';

export const Item = styled.div`
  width: ${({ theme }) => theme.width[1]}px;
  margin: ${({ theme }) => theme.margin[2]}px 0;
  display: flex;
  align-items: center;
  @media ${devices.laptop} {
    width: auto;
  }
  @media ${devices.tablet} {
    width: ${({ theme }) => theme.width[0]}%;
  }
`;

export const Time = styled.span`
  min-width: ${({ theme }) => theme.width[0]}px;
  max-width: ${({ theme }) => theme.width[0]}px;
  text-align: center;
  margin-right: ${({ theme }) => theme.margin[3]}px;
  padding: ${({ theme }) => theme.padding[0]}px ${({ theme }) => theme.padding[1]}px;
  background: ${({ theme }) => theme.transparentDark};
  border-radius: ${({ theme }) => theme.borderRadius[0]}px;
  box-shadow: ${({ theme }) => theme.boxShadowDark} 0px ${({ theme }) => theme.boxShadow[0]}px
    ${({ theme }) => theme.boxShadow[1]}px;
  @media ${devices.laptop} {
    min-width: ${({ theme }) => theme.width[2]}px;
  }
  @media ${devices.tablet} {
    font-size: ${({ theme }) => theme.fontSize[5]}px;
  }
  @media ${devices.largePhone} {
    min-width: ${({ theme }) => theme.width[0]}px;
  }
`;

export const Summary = styled.span`
  min-width: ${({ theme }) => theme.width[2]}px;
  max-height: ${({ theme }) => theme.height[1]}px;
  font-size: ${({ theme }) => theme.fontSize[5]}px;
  padding: ${({ theme }) => theme.padding[0]}px ${({ theme }) => theme.padding[1]}px;
  background: ${({ theme }) => theme.transparentDark};
  border-radius: ${({ theme }) => theme.borderRadius[0]}px;
  box-shadow: ${({ theme }) => theme.boxShadowDark} 0px ${({ theme }) => theme.boxShadow[0]}px
    ${({ theme }) => theme.boxShadow[1]}px;
  overflow: hidden;
  text-align: center;
  @media ${devices.laptop} {
    min-width: ${({ theme }) => theme.width[2]}px;
    height: ${({ theme }) => theme.height[2]}px;
  }
  @media ${devices.tablet} {
    font-size: ${({ theme }) => theme.fontSize[5]}px;
    height: ${({ theme }) => theme.height[3]}px;
    width: ${({ theme }) => theme.width[0]}%;
  }
`;
