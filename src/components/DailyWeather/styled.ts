import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  justify-content: space-between;
`;

export const Item = styled.div`
  font-size: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

export const Icon = styled.img`
  width: 70px;
  height: 70px;
`;

export const WeekDay = styled.p`
  font-size: 14px;
  font-weight: 600;
  padding: 5px 10px;
  text-transform: uppercase;
  background-color: #21252b;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
export const Temperature = styled.p`
  font-size: 26px;
`;
