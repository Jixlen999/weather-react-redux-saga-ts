import styled from 'styled-components';

export const Item = styled.div`
  width: ${({ theme }) => theme.width[1]}px;
  margin: ${({ theme }) => theme.margin[2]}px 0;
  display: flex;
  align-items: center;
  @media (max-width: 1440px) {
    width: auto;
  }
  @media (max-width: 768px) {
    width: ${({ theme }) => theme.width[0]}%;
  }
`;

export const Time = styled.span`
  min-width: ${({ theme }) => theme.width[0]}px;
  max-width: ${({ theme }) => theme.width[0]}px;
  text-align: center;
  margin-right: ${({ theme }) => theme.margin[3]}px;
  padding: ${({ theme }) => theme.padding[0]}px ${({ theme }) => theme.padding[1]}px;
  background: ${({ theme }) => theme.transparentDark};
  border-radius: ${({ theme }) => theme.borderRadius[0]}px;
  box-shadow: ${({ theme }) => theme.boxShadowDark} 0px ${({ theme }) => theme.boxShadow[0]}px
    ${({ theme }) => theme.boxShadow[1]}px;
  @media (max-width: 1440px) {
    min-width: ${({ theme }) => theme.width[2]}px;
  }
  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize[5]}px;
  }
  @media (max-width: 568px) {
    min-width: ${({ theme }) => theme.width[0]}px;
  }
`;

export const Summary = styled.span`
  min-width: ${({ theme }) => theme.width[2]}px;
  max-height: ${({ theme }) => theme.height[1]}px;
  font-size: ${({ theme }) => theme.fontSize[5]}px;
  padding: ${({ theme }) => theme.padding[0]}px ${({ theme }) => theme.padding[1]}px;
  background: ${({ theme }) => theme.transparentDark};
  border-radius: ${({ theme }) => theme.borderRadius[0]}px;
  box-shadow: ${({ theme }) => theme.boxShadowDark} 0px ${({ theme }) => theme.boxShadow[0]}px
    ${({ theme }) => theme.boxShadow[1]}px;
  overflow: hidden;
  text-align: center;
  @media (max-width: 1440px) {
    min-width: ${({ theme }) => theme.width[2]}px;
    height: ${({ theme }) => theme.height[2]}px;
  }
  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize[5]}px;
    height: ${({ theme }) => theme.height[3]}px;
    width: ${({ theme }) => theme.width[0]}%;
  }
`;
