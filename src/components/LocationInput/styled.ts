import styled from 'styled-components';

export const Input = styled.input`
  outline: none;
  display: inline-block;
  background: rgba(40, 44, 52, 0.8);
  width: 70%;
  border: none;
  border-radius: 4px;
  padding: 12px 20px;
  color: white;
`;

export const Btn = styled.button`
  display: inline-block;
  width: 25%;
  height: 100%;
  background: rgba(40, 44, 52, 0.8);
  color: white;
  border: none;
  border-bottom: 5px solid white;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

export const Wrapper = styled.div`
  margin-top: 10px;
  width: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
