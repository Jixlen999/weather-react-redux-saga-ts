import styled from 'styled-components';

interface IBtn {
  active: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

export const Btn = styled.div<IBtn>`
  text-align: center;
  width: 100%;
  padding: 10px 15px;
  font-size: 20px;
  display: inline-block;
  height: auto;
  background: ${({ active }) => (active ? 'rgba(40, 44, 52, 1)' : 'rgba(40, 44, 52, 0.2)')};
  color: white;
  border: none;
  border-left: 5px solid white;
  border-right: 5px solid white;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  &:hover {
    background-color: rgba(40, 44, 52, 1);
  }
`;
