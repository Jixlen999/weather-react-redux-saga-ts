import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 200px;
  padding: 50px;
  position: absolute;
  bottom: 0;
  background: rgba(40, 44, 52, 0.8);
  color: white;
  display: flex;
  z-index: 0;
`;

export const WeatherNow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 30%;
  height: 100%;
`;
export const FutureWeather = styled.div`
  width: 70%;
`;

export const Day = styled.h3`
  padding: 5px 10px;
  text-transform: uppercase;
  background-color: #21252b;
  border-radius: 15px;
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
