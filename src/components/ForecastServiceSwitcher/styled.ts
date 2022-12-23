import styled from 'styled-components';

import devices from '@constants/devices';
import { IBtn } from '@src/types';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.gap[2]}px;
  @media ${devices.laptop} {
    flex-direction: row;
  }
  @media ${devices.largePhone} {
    flex-direction: column;
  }
`;

export const ServiceBtn = styled.div<IBtn>`
  text-align: center;
  width: ${({ theme }) => theme.width[0]}%;
  padding: ${({ theme }) => theme.padding[4]}px ${({ theme }) => theme.padding[7]}px;
  font-size: ${({ theme }) => theme.fontSize[1]}px;
  display: inline-block;
  height: auto;
  background: ${({ active, theme }) => (active ? theme.dark : theme.transparentLight)};
  color: white;
  border: ${({ theme }) => theme.border[0]}px solid ${({ theme }) => theme.white};
  border-radius: ${({ theme }) => theme.borderRadius[2]}px;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transition[0]}s ease;
  box-shadow: ${({ theme }) => theme.boxShadowDark} 0px ${({ theme }) => theme.boxShadow[0]}px
    ${({ theme }) => theme.boxShadow[1]}px;
  &:hover {
    background-color: ${({ theme }) => theme.dark};
  }
`;
