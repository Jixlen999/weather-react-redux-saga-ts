import styled from 'styled-components';

export const Item = styled.div`
  width: 500px;
  width: 250px;
  margin: 5px 0;
  display: flex;
  align-items: center;
  @media (max-width: 1440px) {
    width: auto;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Time = styled.span`
  min-width: 100px;
  max-width: 100px;
  text-align: center;
  margin-right: 30px;
  padding: 3px 7px;
  background: rgba(40, 44, 52, 0.8);
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  @media (max-width: 1440px) {
    min-width: 150px;
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 568px) {
    min-width: 100px;
  }
`;

export const Summary = styled.span`
  min-width: 150px;
  max-height: 42px;
  font-size: 14px;
  padding: 3px 7px;
  background: rgba(40, 44, 52, 0.8);
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  overflow: hidden;
  text-align: center;
  @media (max-width: 1440px) {
    min-width: 150px;
    height: 28px;
  }
  @media (max-width: 768px) {
    font-size: 14px;
    height: 26px;
    width: 100%;
  }
`;
