import styled from 'styled-components';

export const DateAndCityLayout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: white;
  margin: 70px 70px 20px 70px;
`;

export const Location = styled.div`
  h3 {
    font-size: 30px;
    font-weight: 100;
  }
`;

export const Country = styled.h5`
  font-size: 16px;
  font-weight: 100;
  text-align: end;
`;

export const City = styled.h2`
  font-size: 28px;
  font-weight: 100;
  text-align: start;
`;
