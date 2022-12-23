import styled from 'styled-components';

import devices from '@constants/devices';

export const Item = styled.div`
  font-size: ${({ theme }) => theme.fontSize[30]}px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.gap[10]}px;
  @media ${devices.largePhone} {
    flex-direction: row;
  }
`;

export const Icon = styled.img`
  width: ${({ theme }) => theme.width[80]}px;
  height: ${({ theme }) => theme.height[80]}px;
  @media ${devices.largePhone} {
    width: ${({ theme }) => theme.width[100]}px;
    height: ${({ theme }) => theme.height[100]}px;
  }
`;

export const WeekDayOrTime = styled.p`
  font-size: ${({ theme }) => theme.fontSize[14]}px;
  font-weight: ${({ theme }) => theme.fontWeight[600]};
  padding: ${({ theme }) => theme.padding[5]}px ${({ theme }) => theme.padding[10]}px;
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.colors.dark};
  border-radius: ${({ theme }) => theme.borderRadius[15]}px;
  box-shadow: ${({ theme }) => theme.colors.boxShadowDark} 0px ${({ theme }) => theme.boxShadow[3]}px
    ${({ theme }) => theme.boxShadow[8]}px;
  @media ${devices.largePhone} {
    font-size: ${({ theme }) => theme.fontSize[16]}px;
  }
`;
export const Temperature = styled.p`
  font-size: ${({ theme }) => theme.fontSize[26]}px;
  @media ${devices.largePhone} {
    font-size: ${({ theme }) => theme.fontSize[30]}px;
    font-weight: ${({ theme }) => theme.fontWeight[600]};
  }
`;
