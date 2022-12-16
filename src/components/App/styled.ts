import styled from 'styled-components';
import chooseBgImage from '@src/utils/chooseImage';

interface IAppWrapper {
  weatherSummary: string;
}

const AppWrapper = styled.div<IAppWrapper>`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  background: url(${({ weatherSummary }) => chooseBgImage(weatherSummary).bgImage}) no-repeat fixed center;
  background-size: cover;
`;

export default AppWrapper;
