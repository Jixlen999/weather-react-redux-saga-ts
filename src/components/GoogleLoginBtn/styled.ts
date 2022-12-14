import styled from 'styled-components';

const Btn = styled.div`
  display: inline-block;
  width: 100px;
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

export default Btn;
