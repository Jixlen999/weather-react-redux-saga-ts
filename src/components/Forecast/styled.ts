import styled from 'styled-components';

import devices from '@constants/devices';

export const Wrapper = styled.div`
  width: ${({ theme }) => theme.width[0]}%;
  height: ${({ theme }) => theme.height[5]}px;
  padding: ${({ theme }) => theme.padding[2]}px ${({ theme }) => theme.padding[3]}px;
  position: absolute;
  bottom: 0;
  background: ${({ theme }) => theme.transparentDark};
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.gap[1]}px;
  @media ${devices.laptop} {
    height: ${({ theme }) => theme.height[6]}%;
    flex-direction: column;
    overflow-y: auto;
    padding: ${({ theme }) => theme.padding[4]}px;
  }
  @media ${devices.largePhone} {
    overflow-y: scroll;
    padding-top: ${({ theme }) => theme.padding[5]}px;
    padding-bottom: ${({ theme }) => theme.padding[3]}px;
  }
`;

export const WeatherNow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: ${({ theme }) => theme.width[5]}%;
  height: ${({ theme }) => theme.height[0]}%;
  @media ${devices.laptop} {
    width: ${({ theme }) => theme.width[6]}px;
  }
  @media ${devices.tablet} {
    width: auto;
    justify-content: space-evenly;
    border-bottom: ${({ theme }) => theme.border[0]}px solid white;
  }
`;
export const FutureWeatherWrapper = styled.div`
  width: ${({ theme }) => theme.width[7]}%;
  @media ${devices.laptop} {
    width: auto;
  }
`;

export const Day = styled.h3`
  padding: ${({ theme }) => theme.padding[6]}px ${({ theme }) => theme.padding[6]}px;
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.dark};
  border-radius: ${({ theme }) => theme.borderRadius[0]}px;
  box-shadow: ${({ theme }) => theme.boxShadowDark} 0px ${({ theme }) => theme.boxShadow[0]}px
    ${({ theme }) => theme.boxShadow[1]}px; ;
`;
export const Temp = styled.p`
  font-size: ${({ theme }) => theme.fontSize[6]}px;
`;
export const Icon = styled.img`
  width: ${({ theme }) => theme.width[2]}px;
  height: ${({ theme }) => theme.height[7]}px;
`;
export const TempWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Switchers = styled.div`
  width: ${({ theme }) => theme.width[8]}%;
  @media ${devices.laptop} {
    width: auto;
  }
  @media ${devices.tablet} {
    width: ${({ theme }) => theme.width[0]}%;
  }
`;
