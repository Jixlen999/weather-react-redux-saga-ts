import styled from 'styled-components';

export const Item = styled.div`
  font-size: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  @media (max-width: 560px) {
    flex-direction: row;
    gap: 30px;
  }
`;

export const Icon = styled.img`
  width: 70px;
  height: 70px;
  @media (max-width: 560px) {
    width: 150px;
    height: 150px;
  }
`;

export const WeekDayOrTime = styled.p`
  font-size: 14px;
  font-weight: 600;
  padding: 5px 10px;
  text-transform: uppercase;
  background-color: #21252b;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  @media (max-width: 560px) {
    font-size: 20px;
  }
`;
export const Temperature = styled.p`
  font-size: 26px;
  @media (max-width: 560px) {
    font-weight: 600;
  }
`;
