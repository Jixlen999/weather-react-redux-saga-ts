import styled from 'styled-components';
import chooseBgImage from '@src/utils/chooseImage';

interface IMainWrapper {
  weatherSummary: string;
}
const Wrapper = styled.div<IMainWrapper>`
  position: relative;
  width: 80%;
  height: 80%;
  background: url(${({ weatherSummary }) => chooseBgImage(weatherSummary).mainImage}) no-repeat fixed center;
  background-size: cover;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2), 0 16px 20px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;
export default Wrapper;
