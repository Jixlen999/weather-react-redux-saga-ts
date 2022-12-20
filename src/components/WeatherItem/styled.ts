import styled from 'styled-components';

import devices from '@src/constants/devices';

export const Item = styled.div`
  font-size: ${({ theme }) => theme.fontSize[2]}px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.gap[2]}px;
`;

export const Icon = styled.img`
  width: ${({ theme }) => theme.width[10]}px;
  height: ${({ theme }) => theme.height[8]}px;
  @media ${devices.largePhone} {
    width: ${({ theme }) => theme.width[0]}px;
    height: ${({ theme }) => theme.height[0]}px;
  }
`;

export const WeekDayOrTime = styled.p`
  font-size: ${({ theme }) => theme.fontSize[5]}px;
  font-weight: ${({ theme }) => theme.fontWeight[2]};
  padding: ${({ theme }) => theme.padding[6]}px ${({ theme }) => theme.padding[4]}px;
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.dark};
  border-radius: ${({ theme }) => theme.borderRadius[0]}px;
  box-shadow: ${({ theme }) => theme.boxShadowDark} 0px ${({ theme }) => theme.boxShadow[0]}px
    ${({ theme }) => theme.boxShadow[1]}px;
  @media ${devices.largePhone} {
    font-size: ${({ theme }) => theme.fontSize[3]}px;
  }
`;
export const Temperature = styled.p`
  font-size: ${({ theme }) => theme.fontSize[9]}px;
  @media ${devices.largePhone} {
    font-size: ${({ theme }) => theme.fontSize[2]}px;
    font-weight: ${({ theme }) => theme.fontWeight[2]};
  }
`;
