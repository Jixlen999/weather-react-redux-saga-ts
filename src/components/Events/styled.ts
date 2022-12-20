import styled from 'styled-components';

const Wrapper = styled.div`
  margin-left: ${({ theme }) => theme.margin[0]}px;
  color: white;
  width: ${({ theme }) => theme.width[3]}px;
  max-width: ${({ theme }) => theme.width[4]}px;
  max-height: ${({ theme }) => theme.height[4]}px;
  padding: ${({ theme }) => theme.padding[0]}px ${({ theme }) => theme.padding[1]}px;
  margin-right: ${({ theme }) => theme.margin[3]}px;
  background: ${({ theme }) => theme.transparentLight};
  border-radius: ${({ theme }) => theme.borderRadius[1]}px;
  box-shadow: ${({ theme }) => theme.boxShadowDark} 0px ${({ theme }) => theme.boxShadow[0]}px
    ${({ theme }) => theme.boxShadow[1]}px;
  font-weight: ${({ theme }) => theme.fontWeight[1]};
  @media (max-width: 1440px) {
    margin: auto;
    width: auto;
    height: auto;
  }
`;

export default Wrapper;
