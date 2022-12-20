import styled from 'styled-components';
import chooseBgImage from '@src/utils/chooseImage';

interface IAppWrapper {
  weatherSummary: string;
}

const AppWrapper = styled.div<IAppWrapper>`
  width: ${({ theme }) => theme.width[0]}%;
  height: ${({ theme }) => theme.height[0]}vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: ${({ theme }) => theme.gap[0]}px;
  background: url(${({ weatherSummary }) => chooseBgImage(weatherSummary).bgImage}) no-repeat fixed center;
  background-size: cover;
`;

export default AppWrapper;
