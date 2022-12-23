import styled from 'styled-components';

import { IButtonWrapper, ILoginWrapper } from '@src/types';
import devices from '@constants/devices';
import displayButton from '@utils/displayButton';

export const Wrapper = styled.div<ILoginWrapper>`
  position: absolute;
  right: ${({ theme }) => theme.right[10]}px;
  top: ${({ theme }) => theme.top[30]}%;
  border-radius: ${({ theme }) => theme.borderRadius[4]}px;
  height: auto;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.transparentDark};
  padding: ${({ theme }) => theme.padding[10]}px;
  padding-top: ${({ theme }) => theme.padding[20]}px;
  box-shadow: ${({ theme }) => theme.colors.boxShadowDark} 0px ${({ theme }) => theme.boxShadow[3]}px
    ${({ theme }) => theme.boxShadow[8]}px;
  @media ${devices.laptop} {
    width: auto;
    padding: ${({ theme }) => theme.padding[10]}px;
  }
  @media ${devices.tablet} {
    flex-direction: column;
    height: ${({ active }) => (!active ? '45px' : 'auto')};
    width: auto;
    top: ${({ theme }) => theme.top[10]}px;
    padding: ${({ theme }) => theme.padding[10]}px;
    overflow: hidden;
    z-index: ${({ theme }) => theme.zIndex[100]};
  }
`;

export const ButtonWrapper = styled.div<IButtonWrapper>`
  width: ${({ theme }) => theme.width[100]}px;
  margin: ${({ theme }) => theme.margin[10]}px 0;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transition['0.2']}s linear;
  display: ${displayButton};
  &:hover {
    transform: scale(${({ theme }) => theme.scale['1.1']});
  }
  svg {
    font-size: ${({ theme }) => theme.fontSize[30]}px;
  }
  @media ${devices.laptop} {
    width: auto;
    p {
      display: none;
    }
    svg {
      font-size: ${({ theme }) => theme.fontSize[45]}px;
    }
  }
  @media ${devices.tablet} {
    svg {
      font-size: ${({ theme }) => theme.fontSize[20]}px;
    }
  }
`;

export const Menu = styled.div`
  color: ${({ theme }) => theme.colors.white};
  display: none;
  svg {
    font-size: ${({ theme }) => theme.fontSize[25]}px;
  }
  cursor: pointer;
  transition: all ${({ theme }) => theme.transition['0.2']}s linear;
  &:hover {
    transform: scale(${({ theme }) => theme.scale['1.1']});
  }
  @media ${devices.tablet} {
    display: block;
  }
`;
