import styled from 'styled-components';

export const Input = styled.input`
  outline: none;
  display: inline-block;
  background: rgba(40, 44, 52, 0.8);
  width: auto;
  border: none;
  border-bottom: 2px solid white;
  border-radius: 4px;
  padding: 12px 20px;
  color: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  @media (max-width: 1024px) {
    width: 150px;
  }
`;

export const SearchWrapper = styled.div`
  position: absolute;
  width: 200px;
  z-index: 100;
`;

export const Btn = styled.button`
  display: inline-block;
  width: 90px;
  height: 100%;
  background: rgba(40, 44, 52, 0.8);
  color: white;
  border: none;
  border: 2px solid white;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  &:hover {
    background: rgba(40, 44, 52, 1);
  }
  @media (max-width: 1440px) {
    padding: 0 15px;
  }
`;

export const Wrapper = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    width: auto;
  }
`;
