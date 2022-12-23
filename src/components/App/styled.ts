import styled from 'styled-components';
import chooseBgImage from '@utils/chooseImage';

interface IAppWrapper {
  weatherSummary: string;
}

const AppWrapper = styled.div<IAppWrapper>`
  width: ${({ theme }) => theme.width[100]}%;
  height: ${({ theme }) => theme.height[100]}vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: ${({ theme }) => theme.gap[30]}px;
  background: url(${({ weatherSummary }) => chooseBgImage(weatherSummary).bgImage}) no-repeat fixed center;
  background-size: cover;
`;

export default AppWrapper;
