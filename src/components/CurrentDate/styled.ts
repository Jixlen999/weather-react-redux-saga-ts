import styled from 'styled-components';

export const Wrapper = styled.div`
  * {
    font-size: ${({ theme }) => theme.fontSize[50]}px;
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const Day = styled.p`
  font-size: ${({ theme }) => theme.fontSize[20]}px;
`;
