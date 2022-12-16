import styled from 'styled-components';

export const Item = styled.div`
  min-width: 250px;
  margin: 10px 0;
  display: flex;
  align-items: center;
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
`;

export const Summary = styled.span`
  width: 500px;
  max-height: 50px;
  padding: 3px 7px;
  margin-right: 30px;
  background: rgba(40, 44, 52, 0.8);
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  overflow: hidden;
`;
