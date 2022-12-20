import styled from 'styled-components';

export const Wrapper = styled.div`
  * {
    font-size: ${({ theme }) => theme.fontSize[0]}px;
    color: white;
  }
`;

export const Day = styled.p`
  font-size: ${({ theme }) => theme.fontSize[1]}px;
`;
