import styled from 'styled-components';

import devices from '@constants/devices';

const Wrapper = styled.div`
  margin-left: ${({ theme }) => theme.margin[70]}px;
  color: ${({ theme }) => theme.colors.white};
  width: ${({ theme }) => theme.width[300]}px;
  max-width: ${({ theme }) => theme.width[500]}px;
  max-height: ${({ theme }) => theme.height[170]}px;
  padding: ${({ theme }) => theme.padding[3]}px ${({ theme }) => theme.padding[7]}px;
  margin-right: ${({ theme }) => theme.margin[30]}px;
  background: ${({ theme }) => theme.colors.transparentLight};
  border-radius: ${({ theme }) => theme.borderRadius[7]}px;
  box-shadow: ${({ theme }) => theme.colors.boxShadowDark} 0px ${({ theme }) => theme.boxShadow[3]}px
    ${({ theme }) => theme.boxShadow[8]}px;
  font-weight: ${({ theme }) => theme.fontWeight[700]};
  @media ${devices.laptop} {
    margin: auto;
    width: auto;
    height: auto;
  }
`;

export default Wrapper;
