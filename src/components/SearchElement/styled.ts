import styled from 'styled-components';

const SearchField = styled.p`
  outline: none;
  display: inline-block;
  background: rgba(40, 44, 52, 0.8);
  width: 100%;
  border: none;
  border-radius: 4px;
  padding: 12px 20px;
  color: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  &:hover {
    cursor: pointer;
    background: rgba(40, 44, 52, 1);
  }
`;

export default SearchField;
