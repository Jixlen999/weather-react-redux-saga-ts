import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  right: 10px;
  top: 30%;
  border-radius: 4px;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: rgba(40, 44, 52, 0.8);
  padding: 10px;
  padding-top: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const ButtonWrapper = styled.div`
  width: 100px;
  color: white;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s linear;
  &:hover {
    transform: scale(1.2);
    color: white;
  }
`;
