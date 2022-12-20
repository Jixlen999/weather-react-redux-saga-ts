import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.gap[1]}px;
  justify-content: space-between;
  @media (max-width: 560px) {
    flex-direction: row;
  }
`;

export default Wrapper;
