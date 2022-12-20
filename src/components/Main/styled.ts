import styled from 'styled-components';
import chooseBgImage from '@src/utils/chooseImage';

interface IMainWrapper {
  weatherSummary: string;
}
const Wrapper = styled.div<IMainWrapper>`
  position: relative;
  width: ${({ theme }) => theme.width[10]}%;
  height: ${({ theme }) => theme.height[8]}%;
  background: url(${({ weatherSummary }) => chooseBgImage(weatherSummary).mainImage}) no-repeat fixed center;
  background-size: cover;
  box-shadow: ${({ theme }) => theme.boxShadowDark} 0px ${({ theme }) => theme.boxShadow[0]}px
    ${({ theme }) => theme.boxShadow[1]}px;
  border-radius: ${({ theme }) => theme.borderRadius[3]}px;
  @media (max-width: 768px) {
    width: ${({ theme }) => theme.width[0]}%;
    height: ${({ theme }) => theme.height[0]}%;
    background: none;
    box-shadow: none;
    border-radius: 0;
  }
`;
export default Wrapper;
