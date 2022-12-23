import styled from 'styled-components';

import devices from '@constants/devices';

export const DateAndCityLayout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.white};
  margin: ${({ theme }) => theme.margin[70]}px ${({ theme }) => theme.margin[70]}px ${({ theme }) => theme.margin[20]}px
    ${({ theme }) => theme.margin[70]}px;
  @media ${devices.laptop} {
    margin: ${({ theme }) => theme.margin[20]}px;
  }
`;

export const Location = styled.div`
  h3 {
    font-size: ${({ theme }) => theme.fontSize[30]}px;
    font-weight: ${({ theme }) => theme.fontWeight[100]};
  }
`;

export const Country = styled.h5`
  font-size: ${({ theme }) => theme.fontSize[16]}px;
  font-weight: ${({ theme }) => theme.fontWeight[100]};
  text-align: end;
`;

export const City = styled.h2`
  font-size: ${({ theme }) => theme.fontSize[28]}px;
  font-weight: ${({ theme }) => theme.fontWeight[100]};
  text-align: start;
`;
