import styled from 'styled-components';

import devices from '@src/constants/devices';

export const DateAndCityLayout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: white;
  margin: ${({ theme }) => theme.margin[0]}px ${({ theme }) => theme.margin[0]}px ${({ theme }) => theme.margin[1]}px
    ${({ theme }) => theme.margin[0]}px;
  @media ${devices.laptop} {
    margin: ${({ theme }) => theme.margin[1]}px;
  }
`;

export const Location = styled.div`
  h3 {
    font-size: ${({ theme }) => theme.fontSize[2]}px;
    font-weight: ${({ theme }) => theme.fontWeight[0]};
  }
`;

export const Country = styled.h5`
  font-size: ${({ theme }) => theme.fontSize[3]}px;
  font-weight: ${({ theme }) => theme.fontWeight[0]};
  text-align: end;
`;

export const City = styled.h2`
  font-size: ${({ theme }) => theme.fontSize[4]}px;
  font-weight: ${({ theme }) => theme.fontWeight[0]};
  text-align: start;
`;
