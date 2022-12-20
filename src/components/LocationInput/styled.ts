import styled from 'styled-components';

export const Input = styled.input`
  outline: none;
  display: inline-block;
  background: ${({ theme }) => theme.transparentDark};
  width: auto;
  border: none;
  border-bottom: ${({ theme }) => theme.border[0]}px solid ${({ theme }) => theme.white};
  border-radius: ${({ theme }) => theme.borderRadius[2]}px;
  padding: ${({ theme }) => theme.padding[8]}px ${({ theme }) => theme.padding[5]}px;
  color: ${({ theme }) => theme.white};
  box-shadow: ${({ theme }) => theme.boxShadowDark} 0px ${({ theme }) => theme.boxShadow[0]}px
    ${({ theme }) => theme.boxShadow[1]}px;
  @media (max-width: 1024px) {
    width: ${({ theme }) => theme.width[2]}px;
  }
`;

export const SearchWrapper = styled.div`
  position: absolute;
  width: ${({ theme }) => theme.width[6]}px;
  z-index: ${({ theme }) => theme.zIndex[0]};
`;

export const Btn = styled.button`
  display: inline-block;
  width: ${({ theme }) => theme.width[9]}px;
  height: 100%;
  background: ${({ theme }) => theme.transparentDark};
  color: white;
  border: none;
  border: ${({ theme }) => theme.border[0]}px solid ${({ theme }) => theme.white};
  border-radius: ${({ theme }) => theme.borderRadius[2]}px;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: ${({ theme }) => theme.boxShadowDark} 0px ${({ theme }) => theme.boxShadow[0]}px
    ${({ theme }) => theme.boxShadow[1]}px;
  &:hover {
    background: ${({ theme }) => theme.dark};
  }
  @media (max-width: 1440px) {
    padding: 0 ${({ theme }) => theme.padding[7]}px;
  }
`;

export const Wrapper = styled.div`
  margin-top: ${({ theme }) => theme.margin[4]}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    width: auto;
  }
`;
