import styled from 'styled-components';

interface IWrapper {
  active: boolean;
}

export const Wrapper = styled.div<IWrapper>`
  position: absolute;
  right: 10px;
  top: 30%;
  border-radius: 4px;
  height: auto;
  display: flex;
  flex-direction: column;
  background: rgba(40, 44, 52, 0.8);
  padding: 10px;
  padding-top: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  @media (max-width: 1440px) {
    width: auto;
    padding: 10px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    height: ${({ active }: any) => (!active ? '45px' : 'auto')};
    width: auto;
    top: 10px;
    padding: 10px;
    overflow: hidden;
    z-index: 100;
  }
`;

export const ButtonWrapper = styled.div`
  width: 100px;
  margin: 10px 0;
  color: white;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s linear;
  &:hover {
    transform: scale(1.1);
  }
  svg {
    font-size: 30px;
  }

  @media (max-width: 1440px) {
    width: auto;
    p {
      display: none;
    }
    svg {
      font-size: 45px;
    }
  }
  @media (max-width: 768px) {
    svg {
      font-size: 20px;
    }
  }
`;

export const Menu = styled.div`
  color: white;
  display: none;
  svg {
    font-size: 25px;
  }
  cursor: pointer;
  transition: all 0.2s linear;
  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 768px) {
    display: block;
  }
`;
