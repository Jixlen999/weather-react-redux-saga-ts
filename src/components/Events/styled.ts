import styled from 'styled-components';

const Wrapper = styled.div`
  margin-left: 70px;
  color: white;
  width: 300px;
  max-width: 500px;
  max-height: 500px;
  padding: 3px 7px;
  margin-right: 30px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 7px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  font-weight: 700;
  @media (max-width: 1440px) {
    margin: auto;
    overflow-y: auto;
  }
`;

export default Wrapper;
