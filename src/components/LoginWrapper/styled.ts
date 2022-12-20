import styled from 'styled-components';

import { ILoginWrapper } from '@src/types';

export const Wrapper = styled.div<ILoginWrapper>`
  position: absolute;
  right: ${({ theme }) => theme.right[0]}px;
  top: ${({ theme }) => theme.top[0]}%;
  border-radius: ${({ theme }) => theme.borderRadius[2]}px;
  height: auto;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.transparentDark};
  padding: ${({ theme }) => theme.padding[4]}px;
  padding-top: ${({ theme }) => theme.padding[5]}px;
  box-shadow: ${({ theme }) => theme.boxShadowDark} 0px ${({ theme }) => theme.boxShadow[0]}px
    ${({ theme }) => theme.boxShadow[1]}px;
  @media (max-width: 1440px) {
    width: auto;
    padding: ${({ theme }) => theme.padding[4]}px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    height: ${({ active }: any) => (!active ? '45px' : 'auto')};
    width: auto;
    top: ${({ theme }) => theme.top[1]}px;
    padding: ${({ theme }) => theme.padding[4]}px;
    overflow: hidden;
    z-index: ${({ theme }) => theme.zIndex[0]};
  }
`;

export const ButtonWrapper = styled.div`
  width: ${({ theme }) => theme.width[0]}px;
  margin: ${({ theme }) => theme.margin[4]}px 0;
  color: white;
  text-align: center;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transition[0]}s linear;
  &:hover {
    transform: scale(${({ theme }) => theme.scale[0]});
  }
  svg {
    font-size: ${({ theme }) => theme.fontSize[2]}px;
  }

  @media (max-width: 1440px) {
    width: auto;
    p {
      display: none;
    }
    svg {
      font-size: ${({ theme }) => theme.fontSize[7]}px;
    }
  }
  @media (max-width: 768px) {
    svg {
      font-size: ${({ theme }) => theme.fontSize[1]}px;
    }
  }
`;

export const Menu = styled.div`
  color: white;
  display: none;
  svg {
    font-size: ${({ theme }) => theme.fontSize[8]}px;
  }
  cursor: pointer;
  transition: all ${({ theme }) => theme.transition[0]}s linear;
  &:hover {
    transform: scale(${({ theme }) => theme.scale[0]});
  }
  @media (max-width: 768px) {
    display: block;
  }
`;
