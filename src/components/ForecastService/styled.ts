import styled from 'styled-components';

import devices from '@constants/devices';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.gap[20]}px;
  justify-content: space-between;
  @media ${devices.largePhone} {
    flex-direction: column;
  }
`;

export default Wrapper;
