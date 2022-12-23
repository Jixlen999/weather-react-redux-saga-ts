import styled from 'styled-components';

const SearchField = styled.p`
  outline: none;
  display: inline-block;
  background: ${({ theme }) => theme.colors.transparentDark};
  width: ${({ theme }) => theme.width[100]}%;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius[4]}px;
  padding: ${({ theme }) => theme.padding[12]}px ${({ theme }) => theme.padding[20]}px;
  color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.colors.boxShadowDark} 0px ${({ theme }) => theme.boxShadow[3]}px
    ${({ theme }) => theme.boxShadow[8]}px;
  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.colors.dark};
  }
`;

export default SearchField;
