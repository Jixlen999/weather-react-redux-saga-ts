import styled from 'styled-components';

import devices from '@constants/devices';

export const Wrapper = styled.div`
  width: ${({ theme }) => theme.width[100]}%;
  height: ${({ theme }) => theme.height[200]}px;
  padding: ${({ theme }) => theme.padding[30]}px ${({ theme }) => theme.padding[70]}px;
  position: absolute;
  bottom: 0;
  background: ${({ theme }) => theme.colors.transparentDark};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.gap[20]}px;
  @media ${devices.laptop} {
    height: ${({ theme }) => theme.height[45]}%;
    flex-direction: column;
    overflow-y: auto;
    padding: ${({ theme }) => theme.padding[10]}px;
  }
  @media ${devices.largePhone} {
    overflow-y: scroll;
    padding-top: ${({ theme }) => theme.padding[20]}px;
    padding-bottom: ${({ theme }) => theme.padding[70]}px;
  }
`;

export const WeatherNow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: ${({ theme }) => theme.width[20]}%;
  height: ${({ theme }) => theme.height[100]}%;
  @media ${devices.laptop} {
    width: ${({ theme }) => theme.width[200]}px;
  }
  @media ${devices.tablet} {
    width: auto;
    justify-content: space-evenly;
    border-bottom: ${({ theme }) => theme.border[2]}px solid white;
  }
`;
export const FutureWeatherWrapper = styled.div`
  width: ${({ theme }) => theme.width[60]}%;
  @media ${devices.laptop} {
    width: auto;
  }
`;

export const Day = styled.h3`
  padding: ${({ theme }) => theme.padding[5]}px ${({ theme }) => theme.padding[5]}px;
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.colors.dark};
  border-radius: ${({ theme }) => theme.borderRadius[15]}px;
  box-shadow: ${({ theme }) => theme.colors.boxShadowDark} 0px ${({ theme }) => theme.boxShadow[3]}px
    ${({ theme }) => theme.boxShadow[8]}px; ;
`;
export const Temp = styled.p`
  font-size: ${({ theme }) => theme.fontSize[60]}px;
`;
export const Icon = styled.img`
  width: ${({ theme }) => theme.width[150]}px;
  height: ${({ theme }) => theme.height[150]}px;
`;
export const TempWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Switchers = styled.div`
  width: ${({ theme }) => theme.width[10]}%;
  @media ${devices.laptop} {
    width: auto;
  }
  @media ${devices.tablet} {
    width: ${({ theme }) => theme.width[100]}%;
  }
`;
