import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 200px;
  padding: 30px 70px;
  position: absolute;
  bottom: 0;
  background: rgba(40, 44, 52, 0.8);
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  @media (max-width: 1440px) {
    flex-direction: column;
    height: 300px;
    overflow-y: scroll;
    padding: 10px;
  }
  @media (max-width: 568px) {
    padding-bottom: 50px;
    flex-direction: row;
  }
`;

export const WeatherNow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 20%;
  height: 100%;

  @media (max-width: 1440px) {
    width: 200px;
  }
  @media (max-width: 768px) {
    width: auto;
    justify-content: space-evenly;
    border-bottom: 2px solid white;
  }
  @media (max-width: 568px) {
    border-bottom: none;
  }
`;
export const FutureWeatherWrapper = styled.div`
  width: 60%;
  @media (max-width: 1440px) {
    width: auto;
  }
`;

export const Day = styled.h3`
  padding: 5px 10px;
  text-transform: uppercase;
  background-color: #21252b;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
export const Temp = styled.p`
  font-size: 60px;
`;
export const Icon = styled.img`
  width: 150px;
  height: 150px;
`;
export const TempWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Switchers = styled.div`
  width: 10%;
  @media (max-width: 1440px) {
    width: auto;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
