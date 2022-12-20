import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: space-between;
  @media (max-width: 560px) {
    flex-direction: column;
  }
`;

export default Wrapper;
