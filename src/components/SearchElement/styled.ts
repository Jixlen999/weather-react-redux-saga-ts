import styled from 'styled-components';

const SearchField = styled.p`
  outline: none;
  display: inline-block;
  background: ${({ theme }) => theme.transparentDark};
  width: ${({ theme }) => theme.width[0]}%;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius[2]}px;
  padding: ${({ theme }) => theme.padding[8]}px ${({ theme }) => theme.padding[5]}px;
  color: white;
  box-shadow: ${({ theme }) => theme.boxShadowDark} 0px ${({ theme }) => theme.boxShadow[0]}px
    ${({ theme }) => theme.boxShadow[1]}px;
  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.dark};
  }
`;

export default SearchField;
