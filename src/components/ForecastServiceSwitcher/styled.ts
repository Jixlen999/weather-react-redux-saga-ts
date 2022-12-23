import styled from 'styled-components';

import devices from '@constants/devices';
import { IBtn } from '@src/types';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.gap[10]}px;
  @media ${devices.laptop} {
    flex-direction: row;
  }
  @media ${devices.largePhone} {
    flex-direction: column;
  }
`;

export const ServiceBtn = styled.div<IBtn>`
  text-align: center;
  width: ${({ theme }) => theme.width[100]}%;
  padding: ${({ theme }) => theme.padding[10]}px ${({ theme }) => theme.padding[15]}px;
  font-size: ${({ theme }) => theme.fontSize[20]}px;
  display: inline-block;
  height: auto;
  background: ${({ active, theme }) => (active ? theme.colors.dark : theme.colors.transparentLight)};
  color: ${({ theme }) => theme.colors.white};
  border: ${({ theme }) => theme.border[2]}px solid ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius[4]}px;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transition['0.2']}s ease;
  box-shadow: ${({ theme }) => theme.colors.boxShadowDark} 0px ${({ theme }) => theme.boxShadow[3]}px
    ${({ theme }) => theme.boxShadow[8]}px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.dark};
  }
`;
