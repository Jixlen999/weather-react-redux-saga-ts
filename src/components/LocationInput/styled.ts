import styled from 'styled-components';

import devices from '@constants/devices';

export const Input = styled.input`
  outline: none;
  display: inline-block;
  background: ${({ theme }) => theme.colors.transparentDark};
  width: ${({ theme }) => theme.width[200]}px;
  border: none;
  border-bottom: ${({ theme }) => theme.border[2]}px solid ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius[4]}px;
  padding: ${({ theme }) => theme.padding[12]}px ${({ theme }) => theme.padding[20]}px;
  color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.colors.boxShadowDark} 0px ${({ theme }) => theme.boxShadow[3]}px
    ${({ theme }) => theme.boxShadow[8]}px;
  @media ${devices.tablet} {
    width: ${({ theme }) => theme.width[150]}px;
  }
`;

export const SearchVariants = styled.div`
  position: absolute;
  width: ${({ theme }) => theme.width[200]}px;
  z-index: ${({ theme }) => theme.zIndex[100]};
  @media ${devices.tablet} {
    width: ${({ theme }) => theme.width[150]}px;
  }
`;

export const SearchWrapper = styled.div``;

export const SubmitBtn = styled.button`
  display: inline-block;
  width: ${({ theme }) => theme.width[90]}px;
  height: ${({ theme }) => theme.height[100]}%;
  background: ${({ theme }) => theme.colors.transparentDark};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border: ${({ theme }) => theme.border[2]}px solid ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius[4]}px;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: ${({ theme }) => theme.colors.boxShadowDark} 0px ${({ theme }) => theme.boxShadow[3]}px
    ${({ theme }) => theme.boxShadow[8]}px;
  &:hover {
    background: ${({ theme }) => theme.colors.dark};
  }
  @media ${devices.laptop} {
    padding: 0 ${({ theme }) => theme.padding[15]}px;
  }
`;

export const Wrapper = styled.div`
  margin-top: ${({ theme }) => theme.margin[10]}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${devices.tablet} {
    width: auto;
  }
`;
