import styled from 'styled-components';

import devices from '@src/constants/devices';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.gap[1]}px;
  justify-content: space-between;
  @media ${devices.largePhone} {
    flex-direction: column;
  }
`;

export default Wrapper;
